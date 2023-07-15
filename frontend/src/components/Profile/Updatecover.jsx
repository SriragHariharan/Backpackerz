import { useState } from 'react';
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
import ErrorToast from '../General/ErrorToast';
import SuccessToast from '../General/SuccessToast';
import { ToastContainer } from 'react-toastify';


export default function Updatecover({coverModal, setCoverModal, toggleCover}) {
    const { register, handleSubmit } = useForm();
    const [success, setSuccess] = useState(null)
    const [error, setError] = useState(null)

    //submitting form to backend to update cover pic
    const onSubmit = (data) => {
      if(data === undefined){
        return;
      }
      //console.log(data.profilePic[0]);
      const formData = new FormData();
      formData.append("coverPic", data.coverPic[0] );
      console.log(...formData);

      fetch(process.env.REACT_APP_BASE_URL+'/user/update-profile-pic/2',{
            method:"POST",
            body:formData,
            credentials: 'include'
      })
      .then(resp => resp.json())
      .then(json => {
        setSuccess(json.message);
        setCoverModal(false)
      })
      .catch(error => setError(error.message))
    }

  
  
  
    return (
    <MDBModal show={coverModal} setShow={setCoverModal} tabIndex='-1'>

      {error && <ErrorToast errorMessage={error} /> }
      {success && <SuccessToast successMsg={success} />}
      <ToastContainer />

        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Update cover Pic</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleCover}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form encType='multipart/form data' onSubmit={handleSubmit(onSubmit)}>
                  <input {...register("coverPic")} className='border-secondary border-3 w-100 p-2 border' type='file'  />
                  <MDBModalFooter>
                    <MDBBtn color='secondary' onClick={toggleCover}>
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
