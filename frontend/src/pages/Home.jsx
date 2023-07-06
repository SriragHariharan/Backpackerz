import React from 'react'
import Feed from '../components/Homepage/Feed';
import Rightbar from '../components/Homepage/Rightbar';
import Sidebar from '../components/Homepage/Sidebar';
import Topbar from '../components/Homepage/Topbar';

export default function Home() {
  return (
    <>
        <Topbar/>
        <div className="homeContainer">
            <Sidebar/>
            <Feed/>
            <Rightbar/>
        </div>
    </>
  )
}
