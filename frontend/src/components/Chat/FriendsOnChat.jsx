import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import FriendMsgComponent from './FriendMsgComponent'
import Topbar from '../Homepage/Topbar'
import { instance } from '../../axios/Instance'


export default function FriendsOnChat() {
  const [error, setError] = useState(null);
  const [followers, setFollowers] = useState([]);

  //fetch followers
  useEffect(()=>{
    instance.get('/user/get-profile')
    .then(resp => {
      if(resp.data.success === false){
        setError(resp.data.message);
      }else{
        setFollowers(resp.data.data?.userDetails?.followers)
      }
    })
    .catch(err => setError(err.message))
  },[followers])

  return (
    <>
        <Topbar/>
        <MDBContainer fluid style={{ backgroundColor: "#eee", height:'100vh' }}>
             <MDBRow className="d-flex justify-content-center pb-5">
                <h2 className="pt-4 pb-3 text-center">
                    CHATS
                </h2>
                <MDBCol xs="12" md="8" lg="8" xl="7">
                    { followers.map(f => <FriendMsgComponent followerID={f} /> ) }
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </>
  )
}
