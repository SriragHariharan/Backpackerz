const router = require('express').Router();
const { addNewPost, getPostDetails, editPost, likeORunlike, getTimelinePosts, deletePost } = require('../controllers/PostController');
const { authMiddleware } = require('../middlewares/AuthMiddleware')

//add a new post
router.post('/new-post', authMiddleware, addNewPost)

//get a single post
router.get('/post-details/:id', authMiddleware, getPostDetails )

//edit a post
router.post('/edit-post/:id', authMiddleware, editPost)

//like or unlike a post
router.post('/like-unlike/:id', authMiddleware, likeORunlike)

//get all posts of followers
router.get('/timeline', authMiddleware, getTimelinePosts)

//delete a specific post
router.delete('/delete-post/:id', authMiddleware, deletePost)

module.exports = router