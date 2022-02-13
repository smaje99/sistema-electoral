const { Router } = require('express');

const { LoginSessionError } = require('../utils/errors');

const service = require('../services/userSession.service');

const router = Router();

router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;
        const data = await service.login(email, password);
        res.status(200).json(data);
    } catch (error) {
        if (error instanceof LoginSessionError)
            res.status(error.statusCode).json({ error: error.message })
    }
})

module.exports = router;