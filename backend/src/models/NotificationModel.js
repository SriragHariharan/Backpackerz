const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    text:{
        required:true,
        type:String,
    },
    to:{
        required:true,
        type:String,
    },
    isSeen:{
        required:true,
        type:Boolean,
        default:false
    },
    type:{
        required:true,
        type:Number
    }
},{timestamps:true})

module.exports = mongoose.model('Notification', notificationSchema)