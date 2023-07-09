import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { instance } from '../../axios/Instance';
import { ToastContainer } from 'react-toastify';
import ErrorToast from '../General/ErrorToast';
import { useDispatch } from 'react-redux';
import { LoginUser } from '../../redux-toolkit/reducers/UserReducer';

export default function Login({setNewUser}) {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  //submitting data to server
  const onSubmit = (data) => {
    console.log(data);
    instance.post('/auth/login', {...data})
    .then(resp => {
        if(resp.data.success === false){
          setError(resp.data.message)
        }
        else{
          dispatch(LoginUser(resp.data.data))
        }
    })
    .catch(err => setError(err.message) )
  } 

  return (
    <>
        { error && <ErrorToast errorMessage={error} /> }
        <ToastContainer/>
        <div className="d-block d-sm-none d-flex flex-column align-items-center justify-content-center" style={{marginTop:'-200px'}}>
            <div className="h1 text-light">TECH 🌎 TALK</div>
            <p className='text-light'>Connect with techies all over the world.</p>
        </div>
        <form className="loginBox card" onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email", { required: true, pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} placeholder="Email" type="email" className="loginInput" />
            {errors.email?.type === 'required' && <p className='form-error'>email required</p>}
            {errors.email?.type === 'pattern' && <p className='form-error'>Invalid email</p>}

            <input {...register("password", { required: true })}  placeholder="Password"  type="password"  className="loginInput"  />
            {errors.password?.type === 'required' && <p className='form-error'>password required</p>}

            <input className="loginButton" type="submit" value='Login' />
            <span className="loginForgot" onClick={() =>setNewUser(true)}>New user ? Just signup</span>
        </form>
    </>
  )
}
