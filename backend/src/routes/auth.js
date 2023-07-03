const { addNewUser, loginUser } = require('../controllers/AuthController');

const router = require('express').Router();

//add new user
router.post('/register', addNewUser)

//login user
router.post('/login', loginUser)

module.exports = router;

