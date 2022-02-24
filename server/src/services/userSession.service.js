const boom = require('@hapi/boom');

const { query } = require('../utils/database');
const { HTTPError } = require('../utils/errors');

const {
    Institute, PersonalData, Role, User
} = require('../models');

class UserSessionService {
    async login(email, password) {
        try {
            const [[[data]]] = await query(
                `CALL spUserSession_Login("${email}", "${password}")`
            )

            if (data?.isAuth == 0)
                throw new HTTPError("Credenciales Invalidas", 203);

            const user = new User({
                idUser: data.idUser,
                isActive: data.isActive,
                personalData: new PersonalData({
                    idPersonalData: data.idPersonalData,
                    name: data.name
                }),
                institute: new Institute({
                    idInstitute: data.idInstitute,
                    name: data.nameInstitute
                }),
                role: new Role({ idRole: data.idRole, name: data.nameRole })
            })

            return user;
        } catch (error) {
            throw boom.badImplementation(error);
        }
    }
}

module.exports = new UserSessionService();