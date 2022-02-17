const router = require('express').Router();

const service = require('../services/admin.service');

const { createSchema } = require('../utils/schemas/admin.schema');
const validation = require('../utils/middleware/validation.handler');

router.put('/', validation(createSchema), async (req, res, next) => {
    const data = req.body;

    try {
        const sessionData = await service.createAccount(data);
        res.status(201).json(sessionData);
    } catch (error) {
        next(error);
    }
})

module.exports = router;