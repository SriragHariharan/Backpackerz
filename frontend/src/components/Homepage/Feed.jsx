import React, { useEffect, useState } from 'react'
import Post from './Post'
import AddNewPost from './AddNewPost'
import BirthdayPost from './BirthdayPost'
import Suggestions from '../Rightbar/Suggestions'
import { instance } from '../../axios/Instance'
import { useDispatch, useSelector } from 'react-redux'
import { addPosts } from '../../redux-toolkit/reducers/PostsReducer'

export default function Feed() {

  let posts = useSelector(state => state.posts?.posts);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();


  useEffect(() => {
    instance.get('/post/timeline')
    .then(resp => {
      if(resp.data.success === false){
        setError(resp.data.message)
      }else{
        dispatch(addPosts(resp.data.data.posts))
      }
    })
    .catch(err => setError(err.message))
  },[])

  return (
    <>
        <div className="feed">
            <div className="feedWrapper">
                <AddNewPost/>
                {/* will only be viewed in mobile interfaces */}
                <BirthdayPost />
                {
                  posts.map((post, index) => <Post post={post} key={index} /> )
                }
                
                
            </div>
        </div>
    </>
  )
}
