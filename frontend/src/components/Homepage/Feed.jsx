import React, { useEffect, useState } from 'react'
import Post from './Post'
import AddNewPost from './AddNewPost'
import BirthdayPost from './BirthdayPost'
import Suggestions from './Suggestions'
import { instance } from '../../axios/Instance'

export default function Feed() {

  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    instance.get('/post/timeline')
    .then(resp => {
      if(resp.data.success === false){
        setError(resp.data.message)
      }else{
        console.log(resp.data.data);
        setPosts(resp.data.data.posts)
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
