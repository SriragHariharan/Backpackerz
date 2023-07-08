import React from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import RootLayout from './RootLayout';
import Auth from '../pages/Auth';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
export default function useRouter() {
  
  //routes are setup here
  const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='profile' element={<Profile/>} />
      <Route path="auth" element={<Auth />} />
    </Route>
  )
)

//returned value from this custom hook
return {router}
}
