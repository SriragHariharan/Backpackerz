import React from 'react'
import { MDBCardHeader } from 'mdb-react-ui-kit'

export default function HeaderChat() {
  return (
            <MDBCardHeader className="d-flex justify-content-start align-items-center p-3 bg-dark">
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                    alt="avatar 1"
                    style={{ width: "35px", height: "100%" }}
                />
                <h5 className="mb-0 text-light ms-3">Srirag Hariharan M V </h5>
            </MDBCardHeader>
    
  )
}
