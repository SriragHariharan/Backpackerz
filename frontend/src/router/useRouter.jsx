import React from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

//layouts
import RootLayout from './RootLayout';

//pages
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Auth from '../pages/Auth';


export default function useRouter() {
  
  //routes are setup here
  const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='profile' element={<Profile/>} />
      <Route path="auth" element={<Auth/> } />
    </Route>
  )
)

//returned value from this custom hook
return {router}
}
