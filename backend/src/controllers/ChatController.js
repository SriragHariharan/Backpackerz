const Chat = require('../models/ChatModel');

//add new chat to db
const addNewChat = async(req, res) => {
    try {
        let newChat = new Chat({...req.body})
        let savedChat = await newChat.save();
        return res.json({ success:true, message:"Data sent successfully", data:{chat:savedChat}});
    } 
    catch (error) {
        return res.json({ success:false, message:error.message, error_code:500, data:{} })
    }
}

//get chat of specific participants
const getChat = async(req, res) => {
    try {
        let {senderID, receiverID} = req.body;
        let chats = await Chat.find({ members: {$all:[senderID, receiverID]} });
        return res.json({ success:true, message:"chat fetched", data:{chats}})
    } catch (error) {
        return res.json({ success:false, message:error.message, error_code:500, data:{} })  
    }
}

//update isRead in chats
const SetRead = async(req, res) => {
    try {
        let {senderID, receiverID} = req.body;
        let chats = await Chat.updateMany({ members: {$all:[senderID, receiverID]} }, {$set:{isRead:true}});
    } catch (error) {
        return res.json({ success:false, message:error.message, error_code:500, data:{} })  
    }
}


module.exports={addNewChat, getChat, SetRead}
