import React from 'react'
import Post from './Post'
import AddNewPost from './AddNewPost'
import BirthdayPost from './BirthdayPost'
import Suggestions from './Suggestions'

export default function Feed() {
  return (
    <>
        <div className="feed">
            <div className="feedWrapper">
                <AddNewPost/>
                {/* will only be viewed in mobile interfaces */}
                <BirthdayPost />
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                
            </div>
        </div>
    </>
  )
}
