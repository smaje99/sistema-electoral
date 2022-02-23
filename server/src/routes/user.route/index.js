const router = require('express').Router();

router.use('/admin', require('./admin.route'));

module.exports = router;