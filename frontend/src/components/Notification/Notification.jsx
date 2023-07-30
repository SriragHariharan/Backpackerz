import React from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export default function Notification({notification}) {
    
    let like = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Facebook_Like_button.svg/1024px-Facebook_Like_button.svg.png"
    let comment = "https://cdn.pixabay.com/photo/2017/04/11/22/25/balloon-2223048_640.png"
    let post = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg5MfLfDppqkDAi7Ic198S_kGNtbEpwvBZyK_QlI4qoiIRPtoyxPj5DnIYaI2DvSCLSns&usqp=CAU"

  return (
    <div class="notification col-12" style={{backgroundColor: notification?.isSeen === true ? 'white':'#ececec'}}>
        { notification?.type === 1 && <img src={like} alt="like" /> }
        { notification?.type === 2 && <img src={comment} alt="like" /> }
        { notification?.type === 3 && <img src={post} alt="like" /> }

        <div class="text">
            <p>
                <span class="name">{notification?.text}</span> 
            </p>
            <p class="time">{notification?.createdAt !== null && formatDistanceToNow(new Date(notification?.createdAt),{addSuffix: true})}</p>
        </div>
    </div>
  )
}
