const router = require('express').Router();
const commentRoutes = require('./CommentRoutes');
const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');


router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);





module.exports = router;
