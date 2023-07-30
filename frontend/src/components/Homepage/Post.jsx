import React, { useState, useEffect } from 'react'
import { instance } from '../../axios/Instance'
import SuccessToast from '../General/SuccessToast';
import ErrorToast from '../General/ErrorToast';
import { ToastContainer } from 'react-toastify';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../../redux-toolkit/reducers/PostsReducer';
import AddComment from '../Post/AddComment';
import useSocket from '../../hooks/useSocket';

export default function Post({post}) {
  const {socket} = useSocket()
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [notification, setNotification] = useState(null)
  const dispatch = useDispatch();

  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount]= useState(0);
  const {userID:loggedInUserID} = useSelector(state => state.user?.user);

  const [addCommentModal, setAddCommentModal] = useState(false);

  //fetch any post message of added post and save in state
  socket.on("post-added", data => {
    setNotification(data);
    setTimeout(()=>{setNotification(null)},500) //notifs are set to null to avoid unnecessary show of messages
  })
  
  socket.on('commented-in-post', data => {
    setNotification(data);
    setTimeout(()=>{setNotification(null)},500) //notifs are set to null to avoid unnecessary show of messages
  })

  socket.on('liked-post', data => {
    setLikesCount(likesCount + 1)
    setNotification(data);
    setTimeout(()=>{setNotification(null)},500) //notifs are set to null to avoid unnecessary show of messages
  })
  
  socket.on('unliked-post', data => {
    setLikesCount(likesCount - 1)
  })

  //fetch details of user
  useEffect( () => {
    instance.get('/user/get-profile/'+post.userID)
    .then(resp => {
        if(resp.data.success === false){
          return;
        }else{
          setUser(resp.data.data.userDetails);
          setLikesCount(post?.likes?.length);
          setIsLiked(post?.likes?.includes(loggedInUserID))
        }
    })
    // .catch(err => setError(err.message))
  }, [post.userID, post.likes, loggedInUserID, post]);

  //delete a post
  const handlePostDelete = (postID) => {
    instance.delete('/post/delete-post/'+postID)
    .then(resp => {
      if(resp.data.success === false){
        setError(resp.data.messsage)
      }else{
        dispatch(deletePost(postID))
        setSuccess(resp.data.message)
      }
    }).catch(err => setError(err.message))
  }

  //handle like-unlike
  const handleLikeUnlike = (postID) => {
    instance.post('/post/like-unlike/'+postID)
    .then(resp => {
        if(resp.data.success === false){
          setError(resp.data.message);
        }else{
          if(resp.data.data.like === 1 ){
            setIsLiked(true);
            setLikesCount(likesCount + Number(resp.data.data.like) )
          }else{
            setIsLiked(false);
            setLikesCount(likesCount + Number(resp.data.data.like) )
          }   
        }
    })
    .catch(err => console.log(err))
  }

  return (
    <>
        { notification !== null  && <SuccessToast successMsg={notification} /> }
        { success && <SuccessToast successMsg={success} /> }
        { error && <ErrorToast errorMessage={error} />  }
        <ToastContainer />
        <AddComment addCommentModal={addCommentModal} setAddCommentModal={setAddCommentModal} postID={post._id} userID={loggedInUserID} />
        <div className="post">
            <div className="postWrapper">
              <div className="postTop">
                
                <div className="postTopLeft">
                  <Link to={'/'} >
                    <img
                      className="postProfileImg"
                      src={user?.profilePic}
                      alt=""
                    />
                  </Link>
                  <span className="postUsername">{user?.username}</span>
                  <span className="postDate">{post.createdAt?.split('T')[0]}</span>
                </div>
                <div className="postTopRight">
                  {
                    loggedInUserID === post.userID && <i class="fa-solid fa-trash fa-sm" onClick={() => handlePostDelete(post._id)}></i>
                  }
                    
                </div>
              </div>
              <div className="postCenter">
                <span className="postText">{post.description}</span>
                <img className="postImg" 
                  src={post.image}
                  loading='lazy'
                  />
              </div>
              <div className="postBottom">
                <div className="postBottomLeft">
                  {
                  isLiked === true ?
                    <i onClick={() => handleLikeUnlike(post?._id)} className="fa-solid fa-heart me-1 fa-lg" style={{color: "#ff0f0f"}}></i>
                      :
                    <i onClick={() => handleLikeUnlike(post?._id)} className="fa-regular fa-heart me-1"></i>
                  }
                  <span className="postLikeCounter">{likesCount} likes</span>
                </div>
                <div className="postBottomRight">
                  <i className="fa-regular fa-lg fa-comment me-1"></i>
                  <span onClick={() =>  setAddCommentModal(!addCommentModal)} className="postCommentText">{post?.comments?.length} comments</span>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}
