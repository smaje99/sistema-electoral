const router = require('express').Router();

const service = require('../services/roles.service');

const { schema } = require('../utils/schemas/roles.schema');
const validation = require('../utils/middleware/validation.handler');

router.get('/', function (req, res, next) {
    try {
        const roles = await service.get();
        res.status(200).json(roles);
    } catch (error) {
        next(error);
    }
})

router.put('/', validation(schema), async (req, res, next) => {
    const data = req.body;

    try {
        await service.create(data);
        res.status(201).send();
    } catch (error) {
        next(error);
    }
})

module.exports = router;