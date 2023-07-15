const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true, 
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true, 
    },
    profilePic:{
        type:String,
        default:null,
    },
    coverPic :{
        type:String,
        default:null
    },
    description:{
        type:String,
        default:""
    },
    followers:{
        type:Array,
        default:[],
    },
    following:{
        type:Array,
        default:[],
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    city:{
        type:String,
        default:"",
    },
},
{ timestamps : true }
);

module.exports = mongoose.model('User', userSchema)