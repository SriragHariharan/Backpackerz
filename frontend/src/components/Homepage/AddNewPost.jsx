import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ErrorToast from '../General/ErrorToast';
import SuccessToast from '../General/SuccessToast';
import { ToastContainer } from 'react-toastify';


export default function AddNewPost() {
  let user = useSelector(state => state.user?.user)
  console.log(user?.userID);
  
  //images link
  let defaultImg = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  let profileImage = process.env.REACT_APP_SERVER_IMG_API+'/profile-pics/'+user?.userID+'-profile.jpg'

  //priview selected image
   const [image1, setImage1] = useState(null);
   const [image, setImage] = useState(null);
   const [description, setDescription] = useState("");
   const [success, setSuccess] = useState(null);
   const [error, setError] = useState(null);

    const onChangePicture1 = (e) => {
        setImage1(URL.createObjectURL(e.target.files[0]));
        setImage(e.target.files[0])
    };

    //submitting a form to backend API to add a new POST
    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData();
      if(image === null && description === null){
        return;
      }
      if(image !== null){
        formData.append('image', image)
      }
      formData.append('description', description)
      fetch(process.env.REACT_APP_BASE_URL + '/post/new-post',
      {
        method:"POST",
        credentials:'include',
        body:formData
      })
      .then(resp => resp.json())
      .then(json => {
          setSuccess(null)
          setSuccess(json.message);
          setImage(null);
          setImage1(null);
          setDescription("");
      })
      .catch(error => setError(error.message))
    }

  return (
    <>
    { error && <ErrorToast errorMessage={error} /> }
    <ToastContainer />

      <div className="share">
        <div className="shareWrapper">
          
          <form encType='multipart/form data' onSubmit={handleSubmit}>
          
              <div className="shareTop">
                <img src={profileImage } className="shareProfileImg" alt="Avatar" loading="lazy"
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null; // prevents looping
                      currentTarget.src=defaultImg;
                    }}
                />
                <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} placeholder={"What's in your mind ?"} className="shareInput" />
              </div>
              
              <hr className="shareHr" />
              
              { image1 !== null && <div className="shareImgContainer">
                <img className="shareImg" src={image1} alt="" />
              </div> }

              <div className="shareBottom">
                <div className="shareOptions">
                  <label htmlFor="file-upload" class="custom-file-upload">
                      <i className="fa-solid fa-image me-1"></i>
                      <span className="shareOptionText">Photo</span>
                  </label>
                  <input  type='file' onChange={onChangePicture1} id="file-upload"  />
                  
                  <div className="shareOption me-5">
                    <i class="fa-solid fa-location-dot me-1"></i>
                    <span className="shareOptionText">Location</span>
                  </div>
                </div>
                <input className="shareButton" type="submit" value={'Share'} />
              </div>
          
          </form>
        </div>
      </div>
    </>
  )
}
