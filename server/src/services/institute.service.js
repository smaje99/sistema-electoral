const boom = require('@hapi/boom');

const { query } = require('../utils/database');

class InstituteService {
    async create(institute) {
        const {name, nit, email, address, phone} = institute;

        try {
            const [[[idInstitute]]] = await query(
                'CALL spInstitute_Insert(?, ?, ?, ?, ?)',
                [nit, name, address, email, phone]
            );
            return idInstitute;
        } catch (error) {
            throw boom.badImplementation(error);
        }
    }
}

module.exports = new InstituteService();