import React, { useState, useEffect } from 'react'
import FriendsList from '../Rightbar/FriendsList'
import Suggestions from '../Rightbar/Suggestions'
import { instance } from '../../axios/Instance'

export default function Rightbar() {

    const[followers, setFollowers] = useState([]);
    
    //fetching followings
    useEffect(() =>{
        instance.get('/user/get-profile')
        .then(resp => {
            if(resp.data.success === true){
                setFollowers(resp.data.data?.userDetails?.followers)
            }
        })
    },[])

    return (
        <div className="rightbar d-none d-sm-block">
            <div className="rightbarWrapper">
                <h4 className="rightbarTitle">User friends</h4>
                <div className="row">
                {
                    followers.map((f) => <FriendsList friend={f} key={f} /> )
                }
                </div>

                <hr className="sidebarHr" />
                <Suggestions />
            </div>
        </div>        
        )
}
