const boom = require('@hapi/boom');

const { query } = require('../database');

const { LoginSessionError } = require('../utils/errors');

const {
    Institute, PersonalData, Role, User
} = require('../models');

class UserSessionService {
    async login(email, password) {
        try {
            const [[data]] = await new Promise((resolve, reject) => {
                query(
                    `CALL spUserSession_Login("${email}", "${password}")`,
                    (err, result) => !!err ? reject(err) : resolve(result)
                )
            })

            if (data?.isAuth == 0) {
                throw new LoginSessionError("Credenciales Invalidas", 203);
            }

            const user = new User({
                idUser: data.idUser,
                isActive: data.isActive,
                personalData: new PersonalData({
                    idPersonalData: data.idPersonalData,
                    name: data.namePersonalData
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