import React, { useState } from 'react'
import '../styles/login.css'
import Signup from '../components/Authentication/Signup'
import Login from '../components/Authentication/Login'
export default function Auth() {
  const [newUser, setNewUser] = useState(false)
  return (
    <>
      <div className="login  bg-primary">
        <div className="loginWrapper">
          
          <div className="col-md-8 d-none d-sm-block ">
            <div className="h-100 d-flex flex-column align-items-center justify-content-center">
              <img width={'200px'} src="https://w7.pngwing.com/pngs/791/638/png-transparent-backpacking-backpacker-airbnb-logo-angle-microphone-photography.png" alt="" />
              <div className="loginLogo">Backpackerz</div>
              <p className='login-desc'>Connect. &nbsp; &nbsp; &nbsp; Pack. &nbsp; &nbsp; &nbsp; Travel.</p>
              </div>
          </div>
          
          <div className="loginRight col-12 col-md-4">
            {newUser ? <Signup setNewUser={setNewUser}/> : <Login setNewUser={setNewUser}/>}
          </div>

        </div>
      </div>
    </>
  )
}
