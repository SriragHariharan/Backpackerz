import React, {useState, useEffect} from 'react'
import {instance} from '../../axios/Instance'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function Suggestions() {
  let user = useSelector(state => state.user?.user);
  const userID = user?.userID;
  let [suggestions, setSuggestions] = useState(null);
  
  useEffect( () =>{
    instance.get('/user/suggestions')
    .then(resp => setSuggestions(resp.data.data.suggestions))
  },[] )


  return (
    <>
    <h4 className="rightbarTitle">Suggestions</h4>
    {
      suggestions?.filter(item => item._id !== userID).map(item => 
      <Link to={'/external-profile/'+item._id} className="sidebarFriend">
        <img className="sidebarFriendImg" src={item.profilePic} alt="" />
        <span className="sidebarFriendName">{item.username}</span>
      </Link>  
    )}
    {suggestions?.length < 2 && <span className='text-secondary'>No suggestions</span> }
    </>
  )
}
