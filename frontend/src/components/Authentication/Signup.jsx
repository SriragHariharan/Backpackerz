import React from 'react'
import { useForm } from "react-hook-form";



export default function Signup({setNewUser}) {
  const { register, formState: { errors }, handleSubmit, watch } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
        <div className="d-block d-sm-none d-flex flex-column align-items-center justify-content-center" style={{marginTop:'-200px'}}>
            <div className="h1 text-light">TECH 🌎 TALK</div>
            <p className='text-light'>Connect with techies all over the world.</p>
        </div>
        <form className="loginBox card" onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email", { required: true, pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} placeholder="Email" type="email" className="loginInput" />
            {errors.email?.type === 'required' && <p className='form-error'>email required</p>}
            {errors.email?.type === 'pattern' && <p className='form-error'>Invalid email address</p>}

            <input {...register("password", { required: true })} placeholder="Password" type="password" className="loginInput" />
            {errors.password?.type === 'required' && <p className='form-error'>password required</p>}
            
            <input {...register("confirm_pwd", { required: true, validate: (val) => {
                                if (watch('password') !== val) {
                                  return "passwords mismatch";
                                }
                              } })} placeholder="Confirm password" type="password" className="loginInput" />
            {errors.confirm_pwd?.type === 'required' && <p className='form-error'>password required</p>}
            {errors.confirm_pwd?.type === 'validate' && <p className='form-error'>Passwords doesnt match</p>}
            
            <input className="loginButton" type="submit" value='Signup now' />
               
            <span className="loginForgot" onClick={() =>setNewUser(false)}>Existing user ? Just login</span>
        </form>
    </>
  )
}
