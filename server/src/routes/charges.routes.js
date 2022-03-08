const router = require('express').Router();

const service = require('../services/charges.service');

const { schema } = require('../utils/schemas/charges.schema');
const validation = require('../utils/middleware/validation.handler');

router.get('/', function (req, res, next) {
    try {
        const charges = await service.get();
        res.status(200).json(charges);
    } catch (error) {
        next(error);
    }
})

router.put('/', validation(schema), async (req, res, next) => {
    const { institute, charges } = req.body;

    try {
        await service.create(institute, charges);
        res.status(201).send();
    } catch (error) {
        next(error);
    }
})

module.exports = router;