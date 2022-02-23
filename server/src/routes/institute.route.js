const router = require('express').Router();

const service = require('../services/institute.service');

const { createSchema } = require('../utils/schemas/institute.schema');
const validation = require('../utils/middleware/validation.handler');

router.put('/', validation(createSchema), async (req, res, next) => {
    const data = req.body;

    try {
        const idInstitute = await service.create(data);
        res.status(201).json(idInstitute);
    } catch (error) {
        next(error);
    }
})

module.exports = router;