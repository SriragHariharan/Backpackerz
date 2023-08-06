import React from 'react'
import Ads from './Ads.jsx'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <>
        <div className="sidebar d-none d-sm-block">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <Link to={'/'} className="sidebarListItem">
                        <i className="fa-solid fa-house sidebarIcon"></i>
                        <span className="sidebarListItemText">Home</span>
                    </Link>
                    <Link to={'/chats'} className="sidebarListItem">
                        <i className="fa-solid fa-comment sidebarIcon"></i>
                        <span className="sidebarListItemText">Chats</span>
                    </Link>
                    <Link to={'/notifications'} className="sidebarListItem">
                        <i className="fa-solid fa-bell sidebarIcon"></i>
                        <span className="sidebarListItemText">Notifications</span>
                    </Link>
                    <Link to={'/profile'} className="sidebarListItem">
                        <i className="fa-solid fa-user sidebarIcon"></i>
                        <span className="sidebarListItemText">Profile</span>
                    </Link>
                </ul>
                
                <hr className="sidebarHr" /> 
                    <Ads />
            </div>
        </div>
    </>
  )
}
