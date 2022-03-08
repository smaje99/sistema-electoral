const router = require('express').Router();

router.use('/user', require('./user.route'));
router.use('/institute', require('./institute.route'));
router.use('/charges', require('./charges.routes'));
router.use('roles', require('./roles.routes'));

module.exports = router;