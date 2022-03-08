const boom = require('@hapi/boom');

const { query } = require('../utils/database');

class ChargesService {
    async create(institute, charges) {
        try {
            charges.map(charge => {
                let auxCharge = charge;
                if (!charge.hasOwnProperty('idCharge')) {
                    await query(
                        'INSERT INTO charges(name) VALUES (?)',
                        [auxCharge.name]
                    )
                    const idCharge = await query('LAST_INSERT_ID()', []);
                    auxCharge = { idCharge, ...auxCharge };
                }
                await query(
                    'INSERT INTO institutecharge(institute, charge) VALUES (?, ?)',
                    [institute, auxCharge.idCharge]
                )
            })
        } catch (error) {
            throw boom.badImplementation(error);
        }
    }
}

module.exports = new ChargesService();