import React from 'react'
import Post from './Post'
import AddNewPost from './AddNewPost'

export default function Feed() {
  return (
    <>
        <div className="feed">
            <div className="feedWrapper">
                <AddNewPost/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    </>
  )
}
