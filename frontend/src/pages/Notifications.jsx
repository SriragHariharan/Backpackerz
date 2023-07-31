import React, { useEffect, useState } from 'react'
import '../styles/notification.css'
import Sidebar from '../components/Homepage/Sidebar'
import Topbar from '../components/Homepage/Topbar'
import Notification from '../components/Notification/Notification'
import { instance } from '../axios/Instance'
import { useSelector } from 'react-redux'

export default function Notifications() {
    let like = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Facebook_Like_button.svg/1024px-Facebook_Like_button.svg.png"
    let comment = "https://cdn.pixabay.com/photo/2017/04/11/22/25/balloon-2223048_640.png"
    let post = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg5MfLfDppqkDAi7Ic198S_kGNtbEpwvBZyK_QlI4qoiIRPtoyxPj5DnIYaI2DvSCLSns&usqp=CAU"

    let notifications = useSelector(state => state.notifications?.notifications)

    const markAsRead = () => {
        instance.post('/notifs/mark-as-read')
    }

  return (
        <>
        <Topbar/>
            <div className="profile">
              <Sidebar/>
              <div className='col-12 col-md-9'>
                <p className='text-center h4 text-seecondary mt-2 mb-3'>Notifications <i className="fa-solid fa-bell fa-shake" style={{color: "#2e7bff"}}></i></p>
                <p onClick={markAsRead} className="w-100 border border-4 border-dark text-center btn">MARK ALL AS READ </p>
                {
                    notifications?.map((n, index) => <Notification notification={n} key={index} />)
                }    
              </div>
            </div>
        </>
  )
}


