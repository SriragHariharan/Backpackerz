import React, { useState, useRef, useEffect } from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBIcon,
} from "mdb-react-ui-kit";
import SenderMsg from "../components/Chat/SenderMsg";
import ReceiverMsg from "../components/Chat/ReceiverMsg";
// import MessageDate from "../components/Chat/MessageDate";
import HeaderChat from "../components/Chat/HeaderChat";

//socket io backend conn code
import useSocket from "../hooks/useSocket";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { instance } from "../axios/Instance";



export default function Chat() {
    const {userID} = useSelector(state => state.user?.user) 
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const {id} = useParams();
    console.log("current user ID",userID);
    
    //socket io code
    const { socket }  = useSocket();  //custom hook for importing socket instance

    //scroll to bottom code
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    useEffect(() => {scrollToBottom()}, [messages]);
    
    //fetching chats of specific users
    useEffect(() =>{
        instance.post('/chat/get-chat',{senderID:userID, receiverID:id})
        .then(resp => {
             setMessages(resp.data.data?.chats);
             instance.post('chat/mark-as-read',{senderID:userID, receiverID:id})
        })
    },[id, userID])

    //send message to socket io server
    const handleSubmit = () => {
        const msg = {};
        msg.message=message;
        msg.sender = userID;
        msg.receiver = id;
        msg.members=[userID, id]
        socket.emit('send-message', msg);
        instance.post('/chat/add-new-message/',{...msg})
        .then(resp => setMessages([...messages, resp.data.data.chat]) )
    }
    
    //recieve message from server
    socket.on('get-message', message => {
        setMessages([...messages, message])
        instance.post('chat/mark-as-read',{senderID:userID, receiverID:id})

    })
    

  return (
    <>
        <MDBContainer fluid style={{ backgroundColor: "#eee" }}>
            <MDBRow className="d-flex justify-content-center">
                <MDBCol md="10" lg="8" xl="6">
                
                <MDBCard style={{ borderRadius: "15px" }}>
                    
                    <HeaderChat id={id} />
                    
                    <div style={{ position: "relative", height: "80vh",overflowX:'scroll' }}>
                        <MDBCardBody>
                            
                            {/* show dates of send messages */}
                            {/* <MessageDate/> */}
                            {
                                messages.map(item => item.sender === userID ? 
                                <SenderMsg   message={item.message} createdAt={item.createdAt} isRead={item.isRead}  /> : 
                                <ReceiverMsg message={item.message} createdAt={item.createdAt}  />   )
                            }
                            <div ref={messagesEndRef} />
                            
                        </MDBCardBody>
                    </div>
                    
                    <MDBCardFooter className="text-muted d-flex justify-content-start align-items-center p-3">
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Type message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />

                    <span onClick={handleSubmit} className="ms-3">
                        <MDBIcon fas icon="paper-plane" />
                    </span>
                    
                    </MDBCardFooter>
                </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </>
  );
}


