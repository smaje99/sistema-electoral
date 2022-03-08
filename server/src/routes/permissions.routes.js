const router = require('express').Router();

const service = require('../services/permissions.service');

router.get('/', async (req, res, next) => {
    try {
        const permissions = await service.get();
        res.status(200).json(permissions);
    } catch (error) {
        next(error);
    }
})

module.exports = router;