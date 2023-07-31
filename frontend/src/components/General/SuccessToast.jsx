import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SuccessToast({successMsg}) {
    const showToastMessage = () => {
        toast.success(successMsg, {
            position: toast.POSITION.TOP_CENTER,
             toastId: 'suxesToast1',
             autoClose: 1000,
             theme: "dark",
        });
    };
    return (
    <div>{showToastMessage()}</div>
    )
}

