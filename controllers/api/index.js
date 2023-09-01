const router = require('express').Router();
const techRoutes = require('./tech_info_routes');
const userRoutes = require('./user_routes');
const pageRoutes = require('./pages_route');
const blogRoutes = require('./blogs');


router.use('/tech', techRoutes);
router.use('/user', userRoutes);
router.use('/pages', pageRoutes);
router.use('/blogs', blogRoutes);

module.exports = router;
