import {
  MDBCard,
  MDBTypography,
} from "mdb-react-ui-kit";


export default function FriendMsgComponent() {
  return (
          <MDBCard className="mb-2">
              <MDBTypography listUnStyled>
                
                <li className="p-2">
                  <div className="d-flex flex-column justify-content-between">
                    <div className="d-flex flex-row">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp"
                        alt="avatar"
                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                        width="80"
                      />
                      <div className="pt-1">
                        <p className="fw-bold mb-0">Steven Smith</p>
                        <p className="small text-muted">Last seen : 5 decades  ago</p>
                        <p className="small text-muted">
                          Lorem, ipsum dolor sit amet consectetur....
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </MDBTypography>
          </MDBCard>
  )
}
