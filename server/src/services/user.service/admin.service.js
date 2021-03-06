const boom = require('@hapi/boom');

const { query } = require('../../utils/database');

const {
    Institute, PersonalData, Role, User
} = require('../../models');

class AdminService {
    async createAccount(accountData) {
        const { dni, name, email, password, gender, phone, idInstitute } = accountData;

        try {
            const [[[sessionData]]] = await query(
                'CALL spAdmin_Insert(?, ?, ?, ?, ?, ?, ?)',
                [email, password, dni, name, gender, phone, idInstitute]
            )

            const user = new User({
                idUser: sessionData.idUser,
                isActive: sessionData.isActive,
                personalData: new PersonalData({
                    idPersonalData: sessionData.idPersonalData,
                    name: sessionData.name
                }),
                institute: new Institute({
                    idInstitute: sessionData.idInstitute,
                    name: sessionData.nameInstitute
                }),
                role: new Role({ idRole: sessionData.idRole, name: sessionData.nameRole })
            })

            return user;
        } catch (error) {
            throw boom.badImplementation(error, error.message);
        }
    }
}

module.exports = new AdminService();