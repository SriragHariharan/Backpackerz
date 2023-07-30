const Notification = require('../models/NotificationModel')

const getNotifications = async(req, res) => {
    try {
        let userID = req.userID;
        let notifications = await Notification.find({to:userID}).sort({createdAt:-1});
        return res.json({ success:true, message:'Notifications fetched', data:{notifications}})
    } catch (error) {
        return res.json({ success:false, message:error.message, error_code:500, data:{} })
    }
}

const markAllAsRead = async(req, res) => {
    try {
        let userID = req.userID;
        let updatedIsSeen = await Notification.updateMany({ to:userID},{$set:{isSeen:true} });
        return res.json({ success:true, message: "data updated successfully", data:{} });
    } catch (error) {
        return res.json({ success:false, message:error.message, error_code:500, data:{} })
    }
}

module.exports={ getNotifications, markAllAsRead }