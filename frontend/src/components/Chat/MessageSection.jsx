import {
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBTypography,
  MDBCardHeader,
  MDBCardFooter
} from "mdb-react-ui-kit";


export default function MessageSection() {
  return (
    <>
    <MDBCol md="6" lg="7" xl="8" style={{height:'100vh', overflowX:'scroll'}}>
          <MDBTypography listUnStyled>

            <li className="d-flex justify-content-start mb-4">
              {/* <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                alt="avatar"
                className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                width="60"
              /> */}
              <MDBCard className="w-75">
                <MDBCardHeader className="d-flex justify-content-between p-3">
                  <p className="fw-bold mb-0">Brad Pitt</p>
                  <p className="text-muted small mb-0">
                    <MDBIcon far icon="clock" /> 12 mins ago
                  </p>
                </MDBCardHeader>
                <MDBCardBody>
                  <p className="mb-0">
                    Lorem ipsum dolor 
                  </p>
                </MDBCardBody>
              </MDBCard>
            </li>

            <li class="d-flex justify-content-end mb-4">
              <MDBCard className="w-75">
                <MDBCardBody>
                  <p className="mb-0">
                    Sed ut perspiciatis 
                  </p>
                </MDBCardBody>
                <span className="me-2 d-flex justify-content-end">
                  <p style={{fontSize:'10px'}}>
                    <MDBIcon far icon="clock" /> 13 mins ago
                  </p>
                </span>
              </MDBCard>
            </li>

            

          </MDBTypography>
                 <MDBCardFooter style={{position:'sticky', bottom:0, backgroundColor:'peachpuff'}} className="p-4 text-muted d-flex justify-content-start align-items-center p-3">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                alt="avatar 3"
                style={{ width: "45px", height: "100%" }}
              />
              <input
                type="text"
                class="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Type message"
              ></input>
              <div className="ms-3">
                <MDBIcon fas icon="paper-plane" />
              </div>
            </MDBCardFooter>
        </MDBCol>
            </>
  )
}
