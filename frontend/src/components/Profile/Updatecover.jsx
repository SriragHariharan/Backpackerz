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

export default function Updatecover({coverModal, setCoverModal, toggleCover}) {
    const { register, handleSubmit } = useForm();
    //submitting form to backend to update changes
    const onSubmit = (data) => {
        const formData = new FormData();
         formData.append("coverPic", data?.coverPic[0] );
    }
  
  
  
    return (
    <MDBModal show={coverModal} setShow={setCoverModal} tabIndex='-1'>
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
