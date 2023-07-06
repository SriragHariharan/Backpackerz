import React from 'react'

export default function Login({setNewUser}) {
  return (
    <>
        <div className="d-block d-sm-none d-flex flex-column align-items-center justify-content-center">
            <div className="h1 text-light">TECH 🌎 TALK</div>
            <p className='text-light'>Connect with techies all over the world.</p>
        </div>
        <form className="loginBox">
            <input placeholder="Email" type="email" className="loginInput" />
            <input  placeholder="Password"  type="password"  className="loginInput"  />
            <button className="loginButton" type="submit">
                Login
            </button>
            <span className="loginForgot" onClick={() =>setNewUser(true)}>New user ? Just signup</span>
        </form>
    </>
  )
}
