const { getNotifications, markAllAsRead } = require('../controllers/NotificationController');
const { authMiddleware } = require('../middlewares/AuthMiddleware');

const router = require('express').Router();

//get all notifications based on user
router.get('/notifications', authMiddleware, getNotifications)

//update all notifications and set all as read
router.post('/mark-as-read', authMiddleware, markAllAsRead)


module.exports = router;

