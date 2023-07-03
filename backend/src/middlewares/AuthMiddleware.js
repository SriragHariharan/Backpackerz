// this middleware is used to protect the routes of a user after login / signup

const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
const authMiddleware = async(req, res, next) => {
    try {
        let auth = req.headers.authorization;
        if(!auth){
            return res.json({success:false, message:"Token not found", error_code:401, data:{} })
        }
        let token = auth?.split(' ')[1];
        let verifyToken = await jwt.verify(token, process.env.JWT_SECRET);
        let isValid = mongoose.Types.ObjectId.isValid(verifyToken.userID);
        if(!isValid){
            return res.json({success:false, message:"Unauthorized request", error_code:401, data:{} })
        }
        req.userID = verifyToken.userID;
        next()
    } catch (error) {
            return res.json({success:false, message:error.message, error_code:401, data:{} })
    }
}

module.exports = { authMiddleware }