const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const User = require('../models/UserModel');

//generate JWT token
let generateJWT = (userID) => {
    return jwt.sign({userID}, process.env.JWT_SECRET, {expiresIn:'1d'} )
}

//add new user
const addNewUser = async(req, res) => {
    try {
        let{username, email, password} = req.body;
        let userExists = await User.findOne({email});
        if(userExists){
            return res.json({ success:false, message:'User already exists', error_code:400, data:{} })
        }
        password = await bcrypt.hash(password, 10)
        let newUser = await new User({username, email, password});
        let savedUser = await newUser.save()
        let token = generateJWT(savedUser._id)
        res.cookie('TechTalkToken',token, { maxAge: process.env.COOKIE_MAXAGE, httpOnly: true });
        return res.json({ success:true, message:"Signup successfull", data:{ username:savedUser.username, userID : savedUser._id }})
    } 
    catch (error) {
        return res.json({ success:false, message:error.message, error_code:400, data:{} })
    }
}

//login existing user
const loginUser = async(req, res) => {
    try {
        let{email, password} = req.body;
        let userExists = await User.findOne({email});
        if(!userExists){
            return res.json({ success:false, message:'User not found', error_code:404, data:{} })
        }
        let verifiedPassword = await bcrypt.compare(password, userExists.password)
        if(verifiedPassword === false){
            return res.json({ success:false, message:"Wrong password", error_code:400, data:{} })
        }
        let token = generateJWT(userExists._id)
        res.cookie('TechTalkToken',token, { maxAge: process.env.COOKIE_MAXAGE, httpOnly: true });
        return res.json({ success:true, message:"Login successfull", data:{ username:userExists.username, userID : userExists._id }})
    } 
    catch (error) {
        return res.json({ success:false, message:error.message, error_code:400, data:{} })
    }
}



module.exports = {
    addNewUser,
    loginUser,
}

