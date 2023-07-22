import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import FriendMsgComponent from './FriendMsgComponent'
import Topbar from '../Homepage/Topbar'

export default function FriendsOnChat() {
  return (
    <>
        <Topbar/>
        <MDBContainer fluid style={{ backgroundColor: "#eee", height:'100vh' }}>
             <MDBRow className="d-flex justify-content-center pb-5">
                <h2 className="pt-4 pb-3 text-center">
                    CHATS
                </h2>
                <MDBCol xs="12" md="8" lg="8" xl="7">
                    <FriendMsgComponent/>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </>
  )
}
