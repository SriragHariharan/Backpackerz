const User = require('../models/UserModel');
const Post = require('../models/PostModel');
const Notification = require('../models/NotificationModel');
const uploadPathProfilePic ='./uploads/profile-pics/'
const uploadPathCoverPic ='./uploads/cover-pics/'
const fs = require("fs");
const IOimport = require('../server')

//get a single user details
const getUserDetails = async(req, res) => {
    try {
        let userID = req.userID;
        let userDetails = await User.findOne({_id:userID});
        if(userDetails === {} || userDetails === undefined || userDetails === null){
            return res.json({ success:false, message:"Cannot find user", error_code:404, data:{} });
        }
        userDetails.password = null;  //preventing password to be sent to frontend
        return res.json({ success:true, message:"Data fetched successfully", data:{userDetails} })
    } 
    catch (error) {
            return res.json({ success:false, message:error.message, error_code:404, data:{} });        
    }
}


//delete an existing user
const deleteUser = async(req, res) => {
    try {
        let userID = req.userID;
        let response = await User.deleteOne({_id:userID});
        if( response.acknowledged === true && response.deletedCount === 1 ){
            return res.json({ success:true, message:"User deleted successfully", data:{} })
        }
        return res.json({ success:false, message:"User not found", error_code:404, data:{} });        
    } 
    catch (error) {
        return res.json({ success:false, message:error.message, error_code:404, data:{} });            
    }
}

//update user profile
const updateProfile = async(req, res) => {
    try {
        let userID = req.userID;
        let response = await User.updateOne({_id:userID}, {$set:{...req.body}});
        if(response.acknowledged === true && response.modifiedCount === 1){
            return res.json({ success:true, message:"Profile updated successfully", data:{} })
        }
        return res.json({ success:false, message:"Unable to update", error_code:404, data:{} });            
    } 
    catch (error) {
        return res.json({ success:false, message:error.message, error_code:404, data:{} });            
    }
}

//follow a user
const followUser = async(req, res) => {
    try {
        let userID = req.userID;
        let followerID = req.params.id;
        if(userID === followerID){
            return res.json({ success:false, message:"You cant follow yourself", error_code:400, data:{} });            
        }
        let userDetailsFromDB = await User.findOne({_id:userID});
        let isFollowing = userDetailsFromDB.followers.includes(followerID);
        if(isFollowing === true){
            return res.json({success: false, message: "Already following the user", error_code:400, data:{} })
        }
        let user = await User.updateOne({_id:userID}, {$push:{followers : followerID }}) 
        let follower = await User.updateOne({_id:followerID}, {$push:{following:userID}}) 
        if(user.acknowledged === true && user.modifiedCount === 1 && follower.acknowledged === true && follower.modifiedCount === 1 ){
            let followerDetails = await User.findOne({_id:userID});
            // saving notifications to db
            let newNotification = new Notification({text:`${followerDetails?.username} is following you.`, to:followerID, type:4});
            let savedNotification = await newNotification.save();
            IOimport.io.to(followerID).emit('follows-you', `${followerDetails?.username} is following you.`)
            return res.json({ success:true, message:"followed user", data:{} })
        }
        return res.json({ success:false, message:"Unable to follow", error_code:404, data:{} });            
    } 
    catch (error) {
        return res.json({ success:false, message:error.message, error_code:404, data:{} });            
    }
}

const unfollowUser = async(req, res) => {
    try {
        let userID = req.userID;
        let followerID = req.params.id;
        if(userID === followerID){
            return res.json({ success:false, message:"You cant unfollow yourself", error_code:400, data:{} });            
        }
        let user = await User.updateOne({_id:userID}, {$pull:{followers : followerID }}) 
        let follower = await User.updateOne({_id:followerID}, {$pull:{following:userID}}) 
        if(user.acknowledged === true && user.modifiedCount === 1 && follower.acknowledged === true && follower.modifiedCount === 1 ){
            return res.json({ success:true, message:"unfollowed user", data:{} })
        }
        return res.json({ success:false, message:"Unable to unfollow", error_code:404, data:{} });            
    } 
    catch (error) {
        return res.json({ success:false, message:error.message, error_code:404, data:{} });            
    }
}


//update profile pic
const updateProfilePic = async(req, res) => {
    try {
        // id : 1 ==> update profile pic 
        // id : 2 =+> update cover pic
        
        let userID = req.userID;
        let userProfile = await User.findOne({_id:userID});
        
        //code to update profile pic
        if(req.params.id == 1){
            let profilePic = req.files.profilePic
            if(userProfile.profilePic !== null){
                fs.unlinkSync(uploadPathProfilePic + userID+"-profile.jpg");
                profilePic.mv(uploadPathProfilePic + userID +"-profile.jpg", function(err) { if (err) return res.json({success:false, message:"Server Error", error_code:500, data:{} }) });
                let profilePicLink = `${process.env.SERVER_URL}profile-pics/${userID}-profile.jpg`
                let updatedResult = await User.updateOne({_id:userID}, {$set:{profilePic :profilePicLink }});
                return res.json({ success:true, message : "Profile pic updated", data:{} });
            }
            //moving an image to static folder
            else{
                profilePic.mv(uploadPathProfilePic + userID +"-profile.jpg", function(err) { if (err) return res.json({success:false, message:"Server Error", error_code:500, data:{} }) });
                let profilePicLink = `${process.env.SERVER_URL}profile-pics/${userID}-profile.jpg`
                let updatedResult = await User.updateOne({_id:userID}, {$set:{profilePic :profilePicLink }});
                return res.json({ success:true, message : "Profile pic updated", data:{} });
            }
        }
        
        //code to update cover pic
        else{
            let coverPic = req.files.coverPic;
            if(userProfile.coverPic !== null){
                fs.unlinkSync(uploadPathCoverPic + userID+"-cover.jpg");
                coverPic.mv(uploadPathCoverPic + userID +"-cover.jpg", function(err) { if (err) return res.json({success:false, message:"Server Error", error_code:500, data:{} }) });
                let coverPicLink = `${process.env.SERVER_URL}cover-pics/${userID}-cover.jpg`
                let updatedResult = await User.updateOne({_id:userID}, {$set:{coverPic :coverPicLink }});
                return res.json({ success:true, message : "Cover pic updated", data:{} });
            }
            //moving an image to static folder
            else{
                coverPic.mv(uploadPathCoverPic + userID +"-cover.jpg", function(err) { if (err) return res.json({success:false, message:"Server Error", error_code:500, data:{} }) });
                let coverPicLink = `${process.env.SERVER_URL}cover-pics/${userID}-cover.jpg`
                let updatedResult = await User.updateOne({_id:userID}, {$set:{coverPic :coverPicLink }});
                return res.json({ success:true, message : "Cover pic updated", data:{} });
            }
        }
        //code to delete an image if already existing in database
    } catch (error) {
        return res.json({ success:false, message:error.message, error_code:500, data:{} })
    }
}

//to get suggestions based on the city 
const getSuggestions = async(req, res) => {
    try {
        let userID = req.userID;
        let user = await User.findOne({_id: userID});
        let suggestions = await User.find({city: user?.city})
        return res.json({ success: true, message: "Suggestions fetched", data:{suggestions}});   
    } 
    catch (error) {
        return res.json({success:false, message:"Unable to fetch suggestions", error_code:500, data:{}})    
    }
}

//get the details of an another account holder for viewing his profile
const getFollowerDetails = async(req, res) => {
    try {
        let userID = req.params.id;
        let userDetails = await User.findOne({_id:userID});
        if(userDetails === {} || userDetails === undefined || userDetails === null){
            return res.json({ success:false, message:"Cannot find user", error_code:404, data:{} });
        }
        let posts = await Post.find({userID});
        userDetails.password = null;  //preventing password to be sent to frontend
        return res.json({ success:true, message:"Data fetched successfully", data:{userDetails, posts} })
    } 
    catch (error) {
            return res.json({ success:false, message:error.message, error_code:404, data:{} });        
    }
}

module.exports= {
    getUserDetails,
    deleteUser,
    updateProfile,
    followUser,
    unfollowUser,
    updateProfilePic,
    getSuggestions,
    getFollowerDetails,
}