import React from 'react'
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


export default function Updateprofile({basicModal, setBasicModal, toggleShow}) {
   const { register, handleSubmit } = useForm();

   //submitting form to backend to update changes
   const onSubmit = (data) => {
      const formData = new FormData();
        formData.append("profile", data?.profile[0] );
        formData.append("cover", data?.cover[0] );
        formData.append('data', JSON.stringify(data));
    } 
  return (
    <>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Edit user details</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form onSubmit={handleSubmit(onSubmit)}>
                  <MDBInput label='Username'    className='mb-4' type='text' {...register("username")}  />
                  <textarea className='mb-4 w-100 border border-2' placeholder='  Description' {...register("description")}  />
                  <MDBInput label='Current City' className='mb-4' type='text' {...register("city")}  />
                  <MDBInput type='file' size='lg' className='mb-4'  {...register("profile")} />                  
                  <MDBInput type='file' size='lg' className='mb-4'  {...register("cover")} />                  


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
    </>  )
}
