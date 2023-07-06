import React, { useState } from 'react'
import '../styles/login.css'
import Signup from '../components/Authentication/Signup'
import Login from '../components/Authentication/Login'
export default function Auth() {
  const [newUser, setNewUser] = useState(false)
  return (
    <>
        <div className="login">
      <div className="loginWrapper">
        
        <div className="col-md-8 d-none d-sm-block ">
          <div className=" h-100 d-flex flex-column align-items-center justify-content-center">
            <div className="h1 loginLogo">TECH 🌎 TALK</div>
            <p className='text-light'>Connect with techies all over the world.</p>
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
