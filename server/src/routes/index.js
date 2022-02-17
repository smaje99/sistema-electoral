const router = require('express').Router();

router.use('/login', require('./login.route'));
router.use('/admin', require('./admin.route'));

module.exports = router;