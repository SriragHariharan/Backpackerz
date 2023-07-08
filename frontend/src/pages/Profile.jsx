import React, { useState } from 'react'
import Feed from '../components/Homepage/Feed'
import Topbar from '../components/Homepage/Topbar'
import Sidebar from '../components/Homepage/Sidebar'
import Rightbar from '../components/Homepage/Rightbar'
import Updateprofile from '../components/Profile/Updateprofile'

export default function Profile() {
    const [basicModal, setBasicModal] = useState(false);
      const toggleShow = () => setBasicModal(!basicModal);
  return (
    <>
      <Topbar/>
      <div className="profile">
        <Sidebar/>
        <Updateprofile basicModal={basicModal} setBasicModal={setBasicModal} toggleShow={toggleShow}  />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuYoVWGv6EpBVRXsUpLf6I9Eg53Fn1rwQFvYATNqqwkNLrNosRNOnB0aduLtGSutYppKI&usqp=CAU"
                alt=""
              />
              <img
                className="profileUserImg"
                src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Srirag Hariharan</h4>
              <span className="profileInfoDesc ms-3 me-3 mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat cum eos architecto mollitia nesciunt ad est facere maiores. Reprehenderit repellat unde rem cumque aut nihil sit repellendus et voluptatum molestiae facere, deleniti magni amet. Ut earum assumenda ipsam rem perferendis, amet mollitia est modi voluptas velit sapiente quisquam ducimus qui!
              </span>
            </div>

            <div className='ms-5 mb-3 d-block d-sm-none'>
                <h4 className="rightbarTitle">User information</h4>
                    <div>
                        <span>City:</span>
                        <span>Cochin</span>
                    </div>
                    <div>
                        <span>From:</span>
                        <span>Palakkad</span>
                    </div>
                    <div>
                        <span>Relationship:</span>
                        <span> Single </span>
                    </div>
            </div>
            

            <div className="text-center">
                <button onClick={toggleShow} className="btn ms-4 me-4 mb-5 btn-info w-75">E D I T &nbsp; &nbsp;  P R O F I L E</button>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed/>
            <Rightbar/>
          </div>
        </div>
      </div>
    </>  )
}
