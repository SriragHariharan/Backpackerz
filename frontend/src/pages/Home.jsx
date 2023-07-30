import React from 'react'
import Feed from '../components/Homepage/Feed';
import Rightbar from '../components/Homepage/Rightbar';
import Sidebar from '../components/Homepage/Sidebar';
import Topbar from '../components/Homepage/Topbar';
import useSocket from '../hooks/useSocket';

export default function Home() {
  const {socket} = useSocket();
  socket.on("post-added", data => console.log("post added :", data))
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
