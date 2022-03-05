const boom = require('@hapi/boom');

const { query } = require('../../utils/database');
const { HTTPError } = require('../../utils/errors');

const {
    Action,
    Institute,
    Permission,
    PersonalData,
    Role,
    User
} = require('../../models');

class UserSessionService {
    async login(email, password) {
        try {
            const [[[userData]]] = await query(
                'CALL spUserSession_Login(?, ?)',
                [ email, password ]
            );

            if (userData?.isAuth == 0)
                throw new HTTPError("Credenciales Invalidas", 203);

            const user = this.#createUser(userData);
            const permissions = await this.#createPermissions(userData);
            const sessionData = { ...user, permissions };
            return sessionData;
        } catch (error) {
            throw boom.badImplementation(error, error.message);
        }
    }

    #createUser(data) {
        const user = new User({
            idUser: data.idUser,
            isActive: data.isActive,
            personalData: new PersonalData({
                idPersonalData: data.idPersonalData,
                name: data.name
            }),
            institute: new Institute({
                idInstitute: data.idInstitute,
                name: data.institute
            }),
            role: new Role({ idRole: data.idInstituteRole, name: data.role })
        });
        return user;
    }

    async #createPermissions({ idUser, idInstituteRole }) {
        const [[permissionsData]] = await query(
            'CALL spPermissions_Get(?, ?)',
            [ idUser, idInstituteRole ]
        );

        let permissions = new Map();
        permissionsData.forEach(({ menu, route, action, isActive }) => {
            const newAction = new Action({ action, isActive });
            if (permissions.has(menu)) {
                const permission = permissions.get(menu);
                permission.addAction(newAction);
            } else {
                const permission = new Permission({ menu, route });
                permission.addAction(newAction);
                permissions.set(menu, permission);
            }
        });
        permissions = Array.from(permissions.values());
        return permissions;
    }
}

module.exports = new UserSessionService();