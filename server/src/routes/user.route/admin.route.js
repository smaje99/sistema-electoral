const router = require('express').Router();

const service = require('../../services/user.service/admin.service');

const { createAdminAccountSchema } = require('../../utils/schemas/user.schema');
const validation = require('../../utils/middleware/validation.handler');

router.put('/', validation(createAdminAccountSchema), async (req, res, next) => {
    const data = req.body;

    try {
        const sessionData = await service.createAccount(data);
        res.status(201).json(sessionData);
    } catch (error) {
        next(error);
    }
})

module.exports = router;