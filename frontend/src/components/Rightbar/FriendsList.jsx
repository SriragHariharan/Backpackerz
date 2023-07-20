import React, { useEffect, useState } from 'react'
import { instance } from '../../axios/Instance'
import { Link } from 'react-router-dom';

export default function FriendsList({friend}) {

  const [friendDetails, setFriendDetails] = useState(null);

  useEffect(() =>{
    instance.get('/user/get-profile/'+friend)
    .then(resp => {
      if(resp.data.success === false){
        return;
      }else{
        setFriendDetails(resp.data.data.userDetails)
      }
    })
  },[friend]);

  let defaultImg = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'

  return (
      <>       
        <Link to={'/external-profile/'+friend} className="rightbarFollowings col-12 col-md-4">
            <div style={{ textDecoration: "none" }}>
              <div className="rightbarFollowing">
                <img
                    src={defaultImg}
                    alt="Avatar"
                    loading="lazy"
                    className="rightbarFollowingImg border"
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src=defaultImg;
                    }}
                />
                <span className="rightbarFollowingName">{friendDetails?.username}</span>
              </div>
            </div>
        </Link>
      </>  
    )
}
