const router = require('express').Router();
const techRoutes = require('./tech_info_routes');
const userRoutes = require('./user_routes');
const pageRoutes = require('./pages_route');


router.use('/tech', techRoutes);
router.use('/user', userRoutes);
router.use('/pages', pageRoutes);

module.exports = router;
