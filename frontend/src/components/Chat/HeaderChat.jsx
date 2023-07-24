import React,{ useEffect, useState } from 'react'
import { MDBCardHeader } from 'mdb-react-ui-kit'
import { instance } from '../../axios/Instance';


export default function HeaderChat({id}) {

  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState(null);

  //fetch follower details on load
  useEffect(()=>{
    instance.get('/user/get-profile/'+id)
    .then(resp => {
      if(resp.data.success === true){
        setUserDetails(resp.data.data?.userDetails);
      }else{
        setError(resp.data.message)
      }
    })
    .catch(err => setError(err.message))
  },[id])
  
  
  return (
            <MDBCardHeader className="d-flex justify-content-start align-items-center p-3 bg-dark">
                <img
                    src={userDetails?.profilePic}
                    alt="avatar 1"
                    style={{ width: "35px", height: "100%" }}
                />
                <h5 className="mb-0 text-light ms-3">{userDetails?.username}</h5>
            </MDBCardHeader>
    
  )
}
