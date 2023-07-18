import React, { useEffect, useState } from 'react'
import Topbar from '../components/Homepage/Topbar'
import Sidebar from '../components/Homepage/Sidebar'
import { instance } from '../axios/Instance'
import ErrorToast from '../components/General/ErrorToast'
import { ToastContainer } from 'react-toastify'
import { useParams } from 'react-router-dom'
import Post from '../components/Homepage/Post'

export default function ExternalProfile() {
    
    const [userDetails, setUserDetails] = useState(null);
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null)
    const {id} = useParams();
    
      //fetching details of user on page load
      useEffect( () => {
        instance.get('/user/get-profile/'+id)
        .then(resp => {
          if(resp.data.success === false){
              setError(resp.data.message)
            }else{
                setUserDetails(resp.data.data.userDetails);
                setPosts(resp.data.data.posts)
          }
        })
        .catch(err => setError(err.message))
      }, [id])

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
                    <h4 className="profileInfoName">{userDetails?.username}</h4>
                    <span className="profileInfoDesc ms-3 me-3 mb-4 ">
                        {userDetails?.description?.length === 0 ? <p className="text-secondary">Please add description....</p>  : userDetails?.description}
                    </span>
                  </div>

                  <h4 className="rightbarTitle text-center"><u>User information</u></h4>
                  <div className='ms-5 mb-3 d-flex justify-content-around'>
                          <span>
                              <span>City : </span>
                              <span>{userDetails?.city?.length === 0 ? "Please add city...." : userDetails?.city}</span>
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
                                   
                  <div className="text-center">
                    <div className="btn p-3 ms-4 me-4 mb-5 btn-warning w-75 h1"><b>F O L L O W</b></div>
                  </div>
                </div>

                <div className=" col-7 ms-5">
                  {
                    posts.map((post, index) => <Post post={post} key={index} externaluser={true} />)
                  }
                </div>

              </div>
            </div>
            )}
          </> 
     )
}
