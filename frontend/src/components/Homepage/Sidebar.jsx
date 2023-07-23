import React from 'react'
import Ads from './Ads.jsx'

export default function Sidebar() {
  return (
    <>
        <div className="sidebar d-none d-sm-block">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <i className="fa-solid fa-star sidebarIcon"></i>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <i className="fa-solid fa-star sidebarIcon"></i>
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <i className="fa-solid fa-star sidebarIcon"></i>
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <i className="fa-solid fa-star sidebarIcon"></i>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <i className="fa-solid fa-star sidebarIcon"></i>
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                </ul>
                
                <hr className="sidebarHr" /> 
                    <Ads />
            </div>
        </div>
    </>
  )
}
