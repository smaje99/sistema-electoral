const router = require('express').Router();

router.use('/login', require('./login.route'));
router.use('/user', require('./user.route'));
router.use('/institute', require('./institute.route'));

module.exports = router;