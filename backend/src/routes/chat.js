const { addNewChat, getChat } = require('../controllers/ChatController');
const { authMiddleware } = require('../middlewares/AuthMiddleware')

const router = require('express').Router();

//add new message to db
router.post('/add-new-message', authMiddleware, addNewChat);

//get chats of specific users
router.post('/get-chat/', authMiddleware, getChat)

module.exports = router