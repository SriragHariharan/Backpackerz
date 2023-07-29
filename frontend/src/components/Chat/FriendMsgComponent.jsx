import {
  MDBCard,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useEffect, useMemo, useState } from "react";
import { instance } from "../../axios/Instance";
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import { Link } from "react-router-dom";

export default function FriendMsgComponent({followerID}) {

  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState(null);
  const result = useMemo(()=>{
    return userDetails?.updatedAt
  },[userDetails]);

  //fetch follower details on load
  useEffect(()=>{
    instance.get('/user/get-profile/'+followerID)
    .then(resp => {
      if(resp.data.success === true){
        setUserDetails(resp.data.data?.userDetails);
      }else{
        setError(resp.data.message)
      }
    })
    .catch(err => setError(err.message))
  },[followerID])

  return (
          <MDBCard className="mb-2">
              <MDBTypography listUnStyled>
                
                <li className="p-2">
                  <div className="d-flex flex-column justify-content-between">
                    <div className="d-flex flex-row">
                      <img
                        src={userDetails?.profilePic}
                        alt="avatar"
                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                        width="100"
                      />
                      <div className="pt-1">
                        <p className="fw-bold mb-0">{userDetails?.username}</p>
                        {
                          userDetails?.isOnline === true &&
                          <p className="h6 text-success">Online</p>
                        }
                        {
                          userDetails?.isOnline === false && result !== null && <p className="small text-muted">Last seen : {formatDistanceToNowStrict(new Date(result))} ago...</p>
                        }
                          
                        <div>
                          <Link to={'/chats/'+userDetails?._id} className="btn btn-secondary me-3">
                            <i class="fa-solid fa-comment fa-xl me-2"></i>
                            <span>CHAT NOW</span>
                          </Link>
                        </div>
                      </div>
                  
                    </div>
                  </div>
                </li>
              </MDBTypography>
          </MDBCard>
  )
}
