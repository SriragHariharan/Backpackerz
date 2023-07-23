const { addNewUser, loginUser, logoutUser } = require('../controllers/AuthController');

const router = require('express').Router();

//add new user
router.post('/register', addNewUser)

//login user
router.post('/login', loginUser)

//logout user
router.post('/logout/:id', logoutUser)

module.exports = router;

