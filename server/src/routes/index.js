const router = require('express').Router();

router.use('/login', require('./login.route'));
router.use('/admin', require('./admin.route'));
router.use('/institute', require('.institute.route'));

module.exports = router;