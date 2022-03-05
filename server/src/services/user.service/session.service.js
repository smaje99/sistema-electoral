const boom = require('@hapi/boom');

const { query } = require('../../utils/database');
const { HTTPError } = require('../../utils/errors');

const {
    Institute, PersonalData, Role, User
} = require('../../models');

class UserSessionService {
    async login(email, password) {
        try {
            const [[[data]]] = await query(`CALL spUserSession_Login(?, ?)`, [email, password]);

            if (data?.isAuth == 0)
                throw new HTTPError("Credenciales Invalidas", 203);

            const user = this.#createUser(data);
            return user;
        } catch (error) {
            throw boom.badImplementation(error);
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
}

module.exports = new UserSessionService();