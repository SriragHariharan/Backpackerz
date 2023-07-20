import React,{ useState, useEffect} from 'react'
import { instance } from '../../axios/Instance';
import {
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBCardHeader,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Comment({comment}) {

    const [userDetails, setUserdetails] = useState(null);

    //fetch details of user based on userID
    useEffect(() =>{
        instance.get('/user/get-profile/'+comment.userID)
        .then(resp => setUserdetails(resp.data.data?.userDetails))
    },[comment.userID])
  return (
    <div>
        <li className="d-flex mb-4">
            <Link to={'/external-profile/'+comment.userID}>
                <img
                src={userDetails?.profilePic}
                alt="avatar"
                className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                width="60"
                />
            </Link>
            <MDBCard>
                <MDBCardHeader className="d-flex justify-content-between p-2">
                    <p className='fw-bold'>{userDetails?.username}</p> 
                    {/* <p className="text-muted small">
                        <MDBIcon far icon="clock" /> 10 mins ago
                    </p>  */}
                </MDBCardHeader>
                <MDBCardBody className='100vw'>
                    {comment.comment}
                </MDBCardBody>
            </MDBCard>
        </li>
    </div>
  )
}
