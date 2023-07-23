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
import MessageDate from "../components/Chat/MessageDate";
import HeaderChat from "../components/Chat/HeaderChat";

//socket io backend conn code
import { io } from 'socket.io-client'
const socket = io('http://localhost:8000')
socket.on('connect', () => console.log(socket.id));




export default function Chat() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([])

    //scroll to bottom code
    const messagesEndRef = useRef(null);
      const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }
    useEffect(() => {
    scrollToBottom()
    }, [messages]);
    
    //send message to socket io server
    const handleSubmit = () => {
        const msg = {};
        msg.message=message;
        msg.sender = true;
        socket.emit('send-message', msg);
        setMessages([...messages, msg])
    }
    
    //recieve message from server
    socket.on('recieve-message', message => {
        setMessages([...messages, message])
    })
    


  return (
    <>
        <MDBContainer fluid style={{ backgroundColor: "#eee" }}>
            <MDBRow className="d-flex justify-content-center">
                <MDBCol md="10" lg="8" xl="6">
                
                <MDBCard style={{ borderRadius: "15px" }}>
                    
                    <HeaderChat />
                    
                    <div style={{ position: "relative", height: "80vh",overflowX:'scroll' }}>
                        <MDBCardBody>
                            
                            {/* show dates of send messages */}
                            <MessageDate/>
                            {
                                messages.map(item => item.sender === true ? <SenderMsg message={item.message} /> : <ReceiverMsg message={item.message} />   )
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


