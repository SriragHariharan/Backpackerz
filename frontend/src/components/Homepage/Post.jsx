import React, { useState, useEffect } from 'react'
import { instance } from '../../axios/Instance'
import SuccessToast from '../General/SuccessToast';
import ErrorToast from '../General/ErrorToast';
import { ToastContainer } from 'react-toastify';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { deletePost } from '../../redux-toolkit/reducers/PostsReducer';


export default function Post({post}) {

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const dispatch = useDispatch();

  //fetch details of user
  useEffect( () => {
    instance.get('/user/get-profile')
    .then(resp => {
        if(resp.data.success === false){
          return;
        }else{
          setUser(resp.data.data.userDetails)
        }
    })
    // .catch(err => setError(err.message))
  }, []);

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



  return (
    <>
        { success && <SuccessToast successMsg={success} /> }
        { error && <ErrorToast errorMessage={error} />  }
        <ToastContainer />

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
                    user?._id === post.userID && <i class="fa-solid fa-trash fa-sm" onClick={() => handlePostDelete(post._id)}></i>
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
                  <i className="fa-regular fa-heart me-1"></i>
                  <i className="fa-solid fa-heart me-1" style={{color: "#ff0f0f"}}></i>
                  <span className="postLikeCounter">{post.likes?.length} likes</span>
                </div>
                <div className="postBottomRight">
                  <i className="fa-regular fa-comment me-1"></i>
                  <span className="postCommentText">999</span>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}
