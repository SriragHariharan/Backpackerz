const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    message:{
        type:String,
        required:true,
    },
    sender:{
        type:String,
        required:true,
    },
    receiver:{
        type:String,
        required:true
    },
    members:{
        type:Array,
        required:true
    },
    isRead:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

module.exports = mongoose.model('Chat', chatSchema)
