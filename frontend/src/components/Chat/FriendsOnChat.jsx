import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import FriendMsgComponent from './FriendMsgComponent'
import Topbar from '../Homepage/Topbar'
import { instance } from '../../axios/Instance'
import Sidebar from '../Homepage/Sidebar'


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
        <div className="row">
          <div className="col-3">
              <Sidebar/>
          </div>
          <div className="col-9">
              <MDBContainer fluid style={{ backgroundColor: "#eee", height:'85vh' }}>
                  <MDBRow className="d-flex justify-content-center pb-5">
                      <h2 className="pt-4 pb-3 text-center">
                          CHATS
                      </h2>
                      <MDBCol xs="12" md="8" lg="8" xl="5">
                          { followers.map(f => <FriendMsgComponent followerID={f} /> ) }
                      </MDBCol>
                  </MDBRow>
              </MDBContainer>
          </div>
        </div>
        
    </>
  )
}
