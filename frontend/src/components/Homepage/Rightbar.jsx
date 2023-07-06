import React from 'react'
import Profilerightbar from '../Rightbar/Profilerightbar';
import Homerightbar from '../Rightbar/Homerightbar';

export default function Rightbar() {
    const user = true;
    return (
        <div className="rightbar d-none d-sm-block">
            <div className="rightbarWrapper">
                {user ? <Profilerightbar/> : <Homerightbar/> }
            </div>
        </div>        
        )
}
