import React, { useState } from 'react'
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import { useForm } from "react-hook-form";
import SuccessToast from '../General/SuccessToast';
import ErrorToast from '../General/ErrorToast';
import { ToastContainer } from 'react-toastify';

export default function Updateprofilepic({profileModal, setProfileModal, toggleProfile}) {
      const { register, handleSubmit } = useForm();
      const [success, setSuccess] = useState(null)
      const [error, setError] = useState(null)

    //submitting form to backend to update profile pic
    const onSubmit = (data) => {
      if(data === undefined){
        return;
      }
      //console.log(data.profilePic[0]);
      const formData = new FormData();
      formData.append("profilePic", data.profilePic[0] );
      console.log(...formData);

      fetch(process.env.REACT_APP_BASE_URL+'/user/update-profile-pic/1',{
            method:"POST",
            body:formData,
            credentials: 'include'
      })
      .then(resp => resp.json())
      .then(json => {
        setSuccess(json.message);
        setProfileModal(false)
      })
      .catch(error => setError(error.message))
    }


  return (
    <MDBModal show={profileModal} setShow={setProfileModal} tabIndex='-1'>
      { success && <SuccessToast successMsg={success} /> }
      {error && <ErrorToast errorMessage={error} /> }
      <ToastContainer />

        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Update profile Pic</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleProfile}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form encType='multipart/form data' onSubmit={handleSubmit(onSubmit)}>
                  <input {...register("profilePic")} className='border-secondary border-3 w-100 p-2 border' type='file'  />
                  <MDBModalFooter>
                    <MDBBtn color='secondary' onClick={toggleProfile}>
                      Close
                    </MDBBtn>
                    <input type='submit' className='btn btn-primary' value='Update' />
                  </MDBModalFooter>
              </form>
            </MDBModalBody>

          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
  )
}
