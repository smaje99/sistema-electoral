const boom = require('@hapi/boom');

const { query } = require('../utils/database');

class InstituteService {
    async create(institute) {
        try {
            const [[[idInstitute]]] = await query(
                'CALL spInstitute_Insert(?, ?, ?, ?, ?)',
                Object.values(institute)
            );
            return idInstitute;
        } catch (error) {
            throw boom.badImplementation(error);
        }
    }
}

module.exports = new InstituteService();