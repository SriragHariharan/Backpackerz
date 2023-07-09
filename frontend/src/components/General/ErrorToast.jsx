import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ErrorToast({errorMessage}) {
    const showToastMessage = () => {
        toast.error(errorMessage, {
            position: toast.POSITION.TOP_CENTER
        });
    };
  return (
    <div>{showToastMessage()}</div>
  )
}
