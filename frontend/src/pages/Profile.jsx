import React, { useEffect, useState } from 'react'
import Feed from '../components/Homepage/Feed'
import Topbar from '../components/Homepage/Topbar'
import Sidebar from '../components/Homepage/Sidebar'
import Rightbar from '../components/Homepage/Rightbar'
import Updateprofile from '../components/Profile/Updateprofile'
import { instance } from '../axios/Instance'
import ErrorToast from '../components/General/ErrorToast'
import { ToastContainer } from 'react-toastify'
import Updateprofilepic from '../components/Profile/Updateprofilepic'
import Updatecover from '../components/Profile/Updatecover'
import { useDispatch, useSelector } from 'react-redux'
import { SetCity, SetDescription, SetUsername } from '../redux-toolkit/reducers/UserReducer'

export default function Profile() {
  let {userID} = JSON.parse(localStorage.getItem('TechTalkUser'));
      const dispatch = useDispatch()
      const userDetailFromRedux = useSelector(state => state.user)
      
      const [basicModal, setBasicModal] = useState(false);
      const toggleShow = () => setBasicModal(!basicModal);

      const [profileModal, setProfileModal] = useState(false);
      const toggleProfile = () => setProfileModal(!profileModal);

      const [coverModal, setCoverModal] = useState(false);
      const toggleCover = () => setCoverModal(!coverModal)

      const [userDetails, setUserDetails] = useState(null);
      const [error, setError] = useState(null)

      //fetching details of user on page load
      useEffect( () => {
        instance.get('/user/get-profile')
        .then(resp => {
          if(resp.data.success === false){
            setError(resp.data.message)
          }else{
            setUserDetails(resp.data.data.userDetails);
            dispatch(SetUsername(userDetails?.username))
            dispatch(SetDescription(userDetails?.description))
            dispatch(SetCity(userDetails?.city))
          }
        })
        .catch(err => setError(err.message))
      }, [userDetails?.username, userDetails?.description, userDetails?.city, dispatch])

      //conditional rendering of images
      let defaultImg = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
      return (
          <>
            <Topbar/>
            { error && <ErrorToast errorMessage={error} /> }
            <ToastContainer/>

            {!error && (
            <div className="profile">
              <Sidebar/>
              <Updateprofilepic profileModal={profileModal} setProfileModal={setProfileModal} toggleProfile={toggleProfile} />
              <Updateprofile basicModal={basicModal} setBasicModal={setBasicModal} toggleShow={toggleShow} userDetails={userDetails}  />
              <Updatecover coverModal={coverModal} setCoverModal={setCoverModal} toggleCover={toggleCover} />
              
              <div className="profileRight">
                <div className="profileRightTop">
                  <div className="profileCover">
                    <img
                      className="profileCoverImg"
                      src={userDetails?.coverPic}
                      alt="Please Add cover "
                    />
                    <img
                      className="profileUserImg  border-secondary"
                      src={ userDetails?.profilePic === null  ? defaultImg : userDetails?.profilePic  }
                      alt='profile unavailable'
                    />
                  </div>
                  <div className="profileInfo">
                    <h4 className="profileInfoName">{userDetailFromRedux?.username}</h4>
                    <span className="profileInfoDesc ms-3 me-3 mb-4 ">
                        {userDetailFromRedux?.description?.length === 0 ? <p className="text-secondary">Please add description....</p>  : userDetailFromRedux?.description}
                    </span>
                  </div>

                  <h4 className="rightbarTitle text-center"><u>User information</u></h4>
                  <div className='ms-5 mb-3 d-flex justify-content-around'>
                          <span>
                              <span>City : </span>
                              <span>{userDetailFromRedux?.city?.length === 0 ? "Please add city...." : userDetailFromRedux?.city}</span>
                          </span>
                          <span>
                              <span>From : </span>
                              <span>Palakkad</span>
                          </span>
                          <span>
                              <span>Relationship : </span>
                              <span> Single </span>
                          </span>
                  </div>
                  
                  {
                    userDetails?._id === userID ?
                  <div className="text-center mb-5">
                      <button onClick={toggleShow} className="btn ms-4 me-4 mb-4 btn-info w-75">E D I T &nbsp; &nbsp;  P R O F I L E</button>
                      <span onClick={toggleProfile} className='btn btn-dark w-25 me-5'>UPDATE PROFILE PIC</span>
                      <span onClick={toggleCover} className='btn btn-dark w-25 ms-5'>UPDATE COVER PIC</span>
                  </div>
                  :
                  <div className="text-center">
                    <div className="btn p-3 ms-4 me-4 mb-5 btn-warning w-75 h1"><b>F O L L O W</b></div>
                  </div>
                  }
                </div>
                <div className="profileRightBottom">
                  <Feed/>
                  <Rightbar/>
                </div>
              </div>
            </div>
            )}
          </> 
     )
}
