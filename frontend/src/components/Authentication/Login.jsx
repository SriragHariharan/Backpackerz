import React from 'react'
import { useForm } from "react-hook-form";

export default function Login({setNewUser}) {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
        <div className="d-block d-sm-none d-flex flex-column align-items-center justify-content-center">
            <div className="h1 text-light">TECH 🌎 TALK</div>
            <p className='text-light'>Connect with techies all over the world.</p>
        </div>
        <form className="loginBox" onSubmit={handleSubmit(onSubmit)}>
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
