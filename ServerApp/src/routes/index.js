const router = require('express').Router();

router.use('/login', require('./login.route'));

module.exports = router;