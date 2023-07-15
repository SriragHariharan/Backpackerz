import React, { useState } from 'react'
import {
  MDBInput,
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
import { instance } from '../../axios/Instance';
import { ToastContainer } from 'react-toastify';
import ErrorToast from '../General/ErrorToast';
import SuccessToast from '../General/SuccessToast';
import {  useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { SetCity, SetDescription, SetUsername } from '../../redux-toolkit/reducers/UserReducer';

export default function Updateprofile({basicModal, setBasicModal, toggleShow, userDetails }) {

  const { register, handleSubmit } = useForm();
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  //submitting form to backend to update changes
   const onSubmit = (data) => {
    data.username ==='' && delete data.username;
    data.description === '' && delete data.description;
    data.city === '' && delete data.city;
    
    console.log("DATA AFTER DELETION :::", data);

    //setting data to global redux state
    data.username !==undefined && dispatch(SetUsername(data.username));
    data.description !== undefined && dispatch(SetDescription(data.description));
    data.city !== undefined && dispatch(SetCity(data.city));

    //posting form data to backend 
    instance.patch('/user/update-profile',{...data})
    .then(resp => {
      if(resp.data.success === false){
        setError(resp.data.message);
      }else{
        setBasicModal(false);
        navigate('/profile')
        setSuccess(resp.data.message);
      }
    })
    .catch(err => setError(err.message) )
        //const formData = new FormData();
        // formData.append("profilePic", data?.profilePic[0] );
        // formData.append("coverPic", data?.coverPic[0] );
        //formData.append('data', JSON.stringify(data));
      }
    
  return (
    <>
      {error && <ErrorToast errorMessage={error} /> }
      {success && <SuccessToast successMsg={success} />}
      <ToastContainer />
     
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Edit user details</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form onSubmit={handleSubmit(onSubmit)} encType='multipart/form data'>
                  <MDBInput label='Username' className='mb-4' type='text' {...register("username")}  />
                  <textarea className='mb-4 w-100 border border-2' placeholder='  Description' {...register("description")}  />
                  <MDBInput label='Current City' className='mb-4' type='text' {...register("city")}  />

                  <MDBModalFooter>
                    <MDBBtn color='secondary' onClick={toggleShow}>
                      Close
                    </MDBBtn>
                    <input type='submit' className='btn btn-primary' value='Update' />
                  </MDBModalFooter>
              </form>
            </MDBModalBody>

          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  )
}
