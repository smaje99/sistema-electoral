const router = require('express').Router();

router.use('/admin', require('./admin.route'));
router.use('/login', require('./login.route'));

module.exports = router;