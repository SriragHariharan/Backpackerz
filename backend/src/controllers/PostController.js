const Post = require('../models/PostModel');
const User = require('../models/UserModel');
const mongoose = require('mongoose')
const uploadPathPost ='./uploads/posts/'

//add new post
const addNewPost = async(req, res) => {
    try {
        let userID = req.userID;
        let newPost = await new Post({...req.body, userID});
        let savedPost = await newPost.save();
        if(!savedPost){
            return res.json({ success:false, message:"Unable to post", error_code:403, data:{} })
        }
        if(req.files !== null){
            let postImage = req.files.image;
            postImage.mv(uploadPathPost + savedPost._id +".jpg", function(err) { if (err) return res.json({success:false, message:"Server Error", error_code:500, data:{} }) });
            let postPicLink = `${process.env.SERVER_URL}posts/${savedPost._id}.jpg`
            let updatedResult = await Post.updateOne({_id:savedPost._id}, {$set:{image :postPicLink }});
            var post = await Post.findOne({_id:savedPost._id});
            return res.json({ success:true, message:"New post added successfully", data:{post} })
        }
        var post = await Post.findOne({_id:savedPost._id});
        return res.json({ success:true, message:"New post added successfully", data:{post} })
    } 
    catch (error) {        
        return res.json({ success:false, message:"Unable to post", error_code:403, data:{} })
    }
}

//get details of a single post
const getPostDetails = async(req, res) => {
    try {
        let postID = req.params.id;
        let isValid = mongoose.Types.ObjectId.isValid(postID);
        if(!isValid){
            return res.json({ success:false, message:"Unable to find post", error_code:404, data:{} })
        }
        let postDetails = await Post.findOne({_id:postID});
        if(!postDetails){
            return res.json({ success:false, message:"Unable to find post", error_code:404, data:{} })
        }
        return res.json({ success:true, message:"Data fetched successfully", data:{post:postDetails} })
    } 
    catch (error) {
        return res.json({ success:false, message:error.message, error_code:404, data:{} })
    }
}

//add comment to a post
const addComment = async(req, res) => {
    try {
        let postID = req.params.id;
        let post = await Post.findOne({_id:postID});
        if(post === undefined || post === {} ){
            return res.json({ success:false, message:"Unable to find post", error_code:404, data:{} })
        }
        let response = await Post.updateOne({_id:postID}, {$push:{comments:req.body}});
        if(response.acknowledged !== true && response.modifiedCount < 1){
            return res.json({ success:true, message:"Unable to update post", data:{} })
        }
        return res.json({ success:true, message:"Post updated successfully", data:{} })
    } 
    catch (error) {
        return res.json({ success:false, message:error.message, error_code:404, data:{} })    
    }
}

//like or unlike a post
const likeORunlike = async(req, res) => {
    try {
        let postID = req.params.id;
        let post = await Post.findOne({ _id : postID} );
        if(!post.likes?.includes(req.userID)){
            
            // if post is not liked then update the likes[] with userID 
            let response = await Post.updateOne({_id:postID}, {$push:{likes:req.userID}});
            if(response.acknowledged === true && response.modifiedCount === 1){
                return res.json({ success:true, message:"Post liked", data:{like:+1} })
            }else{
                return res.json({ success:false, message:"Unable to like", error_code:500, data:{} })                
            }
        }
        else{

            // if post is already liked then unlike post by pulling out userID from the likes[] 
            let response = await Post.updateOne({_id:postID}, {$pull:{likes:req.userID}});
             if(response.acknowledged === true && response.modifiedCount === 1){
                return res.json({ success:true, message:"Post unliked", data:{like:-1} })
            }else{
                return res.json({ success:true, message:"Unable to unlike", error_code:500, data:{} })                
            }
        }
    } 
    catch (error) {
        return res.json({ success:false, message:error.message, error_code:404, data:{} })            
    }
}

//get timeline posts
const getTimelinePosts = async(req, res) => {
    try {
        let userDetails = await User.findOne({_id:req.userID});
        let userPosts = await Post?.find({userID:req.userID}).sort({createdAt:-1});
        let friendsPosts = await Promise.all(
            userDetails?.followers?.map(async friendID => await Post.find({userID : friendID}))   
        );
        let posts = userPosts.concat(...friendsPosts)
        return res.json({success:true, message:"timeline fetched successfully", data:{posts}})
    } catch (error) {
        return res.json({ success:false, message:error.message, error_code:500, data:{} })                    
    }
}

//delete a post
const deletePost = async(req, res) => {
    try {
        let postID = req.params.id;
        let post = await Post.findOne({_id:postID});
        if(post?.userID !== req.userID || post === null ){
            return res.json({ success:false, message:"Unable to delete post", error_code:401, data:{} })                    
        }
        let response = await Post.deleteOne({_id:postID});
        if( response.acknowledged === true && response.deletedCount === 1 ){
            return res.json({ success:true, message:"Post deleted successfully", data:{} })
        }
        return res.json({ success:false, message:"unable to delete post", error_code:404, data:{} })                    
    } 
    catch (error) {
        return res.json({ success:false, message:error.message, error_code:500, data:{} })                    
    }
}



module.exports = {
    addNewPost,
    getPostDetails,
    addComment,
    likeORunlike,
    getTimelinePosts,
    deletePost,
}