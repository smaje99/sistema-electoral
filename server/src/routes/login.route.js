const router = require('express').Router();

const service = require('../services/user.service/session.service');

const { HTTPError } = require('../utils/errors');
const schema = require('../utils/schemas/login.schema');
const validation = require('../utils/middleware/validation.handler');

router.post('/', validation(schema), async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const data = await service.login(email, password);
        res.status(200).json(data);
    } catch (error) {
        if (error instanceof HTTPError)
            res.status(error.statusCode).json({ error: error.message })
        else next(error);
    }
})

module.exports = router;