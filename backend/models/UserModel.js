const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
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
        default:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png",
    },
    coverPic :{
        type:String,
        default:""
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