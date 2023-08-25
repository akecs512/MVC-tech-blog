const router = require('express').Router();
const travelRoutes = require('./travel_info_routes');
const userRoutes = require('./user_routes');
const pageRoutes = require('./pages_route');


router.use('/travel', travelRoutes);
router.use('/user', userRoutes);
router.use('/pages', pageRoutes);

module.exports = router;
