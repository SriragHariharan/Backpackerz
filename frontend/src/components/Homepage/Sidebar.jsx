import React from 'react'

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
                <li className="sidebarListItem">
                    <i className="fa-solid fa-star sidebarIcon"></i>
                    <span className="sidebarListItemText">Questions</span>
                </li>
                <li className="sidebarListItem">
                    <i className="fa-solid fa-star sidebarIcon"></i>
                    <span className="sidebarListItemText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                    <i className="fa-solid fa-star sidebarIcon"></i>
                    <span className="sidebarListItemText">Events</span>
                </li>
                <li className="sidebarListItem">
                    <i className="fa-solid fa-star sidebarIcon"></i>
                    <span className="sidebarListItemText">Courses</span>
                </li>
                </ul>
                {/* to be deleted */}
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
                <li className="sidebarListItem">
                    <i className="fa-solid fa-star sidebarIcon"></i>
                    <span className="sidebarListItemText">Questions</span>
                </li>
                <li className="sidebarListItem">
                    <i className="fa-solid fa-star sidebarIcon"></i>
                    <span className="sidebarListItemText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                    <i className="fa-solid fa-star sidebarIcon"></i>
                    <span className="sidebarListItemText">Events</span>
                </li>
                <li className="sidebarListItem">
                    <i className="fa-solid fa-star sidebarIcon"></i>
                    <span className="sidebarListItemText">Courses</span>
                </li>
                </ul>
                {/* to be deleted */}

                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                {/* <ul className="sidebarFriendList">
                {Users.map((u) => (
                    <CloseFriend key={u.id} user={u} />
                ))}
                </ul> */}
            </div>
        </div>
    </>
  )
}
