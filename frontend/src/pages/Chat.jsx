import React from "react";
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

export default function Chat() {
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
                            {/* senders message portion */}
                            <SenderMsg/>
                            {/* recievers message section */}
                            <ReceiverMsg/>
                        </MDBCardBody>
                    </div>
                    
                    <MDBCardFooter className="text-muted d-flex justify-content-start align-items-center p-3">
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        id="exampleFormControlInput1"
                        placeholder="Type message"
                    ></input>

                    <span className="ms-3">
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


