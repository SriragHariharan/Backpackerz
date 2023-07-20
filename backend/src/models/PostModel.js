const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    userID:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        default:null,
    },
    likes:{
        type:Array,
        default:[],
    },
    comments:{
        type:Array,
        default:[],
    }
},{timestamps:true})

module.exports = mongoose.model('Post', postSchema)