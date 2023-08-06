import { useForm } from "react-hook-form";
import { useState } from "react";
import Loading from "../General/Loading";
import ErrorToast from "../General/ErrorToast";
import { instance } from "../../axios/Instance";
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux'
import { LoginUser } from "../../redux-toolkit/reducers/UserReducer";

export default function Signup({setNewUser}) {
  const { register, formState: { errors }, handleSubmit, watch } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  //submitting data to backend
  const onSubmit = (data) => {
    delete data.confirm_pwd;
    
    instance.post('/auth/register', {...data})
    .then(resp => {
        setLoading(true);
        if(resp.data.success === false){
          setError(resp.data.message)
          setLoading(false)
        }
        else{
          dispatch(LoginUser(resp.data.data));
          setLoading(false);
        }
    })
    .catch(err => setError(err.message) )
  } 

  return (
    <>
        { error && <ErrorToast errorMessage={error} /> }
        <ToastContainer />

        <div className="d-block d-sm-none d-flex flex-column align-items-center justify-content-center" style={{marginTop:'-200px'}}>
            <div className="loginLogo" style={{fontSize:'70px'}}>Backpackerz</div>
            <p className='login-desc'>Connect. &nbsp; &nbsp; &nbsp; Pack. &nbsp; &nbsp; &nbsp; Travel.</p>
        </div>
        <form className="loginBox card" onSubmit={handleSubmit(onSubmit)}>
            <input {...register("username", { required: true})} placeholder="User name" type="text" className="loginInput" />
            {errors.username?.type === 'required' && <p className='form-error'>username required</p>}
            
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

            {
              loading ?   <Loading/> : 
              <input className="loginButton" type="submit" value='Signup now' />
            }            

            <span className="loginForgot" onClick={() =>setNewUser(false)}>Existing user ? Just login</span>
        </form>
    </>
  )
}
