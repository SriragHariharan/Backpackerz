import React from 'react'
import FriendsList from '../Rightbar/FriendsList'
import Suggestions from '../Rightbar/Suggestions'

export default function Rightbar() {
    return (
        <div className="rightbar d-none d-sm-block">
            <div className="rightbarWrapper">
                <FriendsList />
                <hr className="sidebarHr" />
                <Suggestions />
            </div>
        </div>        
        )
}
