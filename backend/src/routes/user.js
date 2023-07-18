const router = require('express').Router()

const { getUserDetails, deleteUser, updateProfile, followUser, unfollowUser, updateProfilePic, getSuggestions } = require('../controllers/UserController')
const { authMiddleware } = require('../middlewares/AuthMiddleware')

//get user details
router.get('/get-profile', authMiddleware, getUserDetails);

//delete user
router.delete('/delete-account', authMiddleware, deleteUser);

//update user profile
router.patch('/update-profile', authMiddleware, updateProfile );

//follow a user
router.post('/follow/:id', authMiddleware, followUser );

//unfollow a user
router.post('/unfollow/:id', authMiddleware, unfollowUser );

//update profile pic
router.post('/update-profile-pic/:id', authMiddleware, updateProfilePic)

//get suggestions based on city
router.get('/suggestions', authMiddleware, getSuggestions);

module.exports = router