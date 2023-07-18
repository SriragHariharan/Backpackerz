import React from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    Route,
} from "react-router-dom";

//layouts
import RootLayout from './RootLayout';

//pages
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Auth from '../pages/Auth';
import { useSelector } from 'react-redux';
import ExternalProfile from '../pages/ExternalProfile';


export default function useRouter() {
  //fetching user from state
  const USER = useSelector(state => state.user?.user)

  //routes are setup here
  const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={ USER ? <Home /> : <Navigate to={'/auth'}/> } />
      <Route path='profile' element={ USER ? <Profile/> : <Navigate to={'/auth'}/>} />
      <Route path='external-profile/:id' element={ USER ? <ExternalProfile /> : <Navigate to={'/auth'}/>} />
      <Route path="auth" element={ !USER ? <Auth/> : <Navigate to={'/'}/> } />
    </Route>
  )
)

//returned value from this custom hook
return {router}
}
