import React from 'react'
import Online from './Online';
import Suggestions from './Suggestions';

export default function Rightbar() {

    return (
        <div className="rightbar d-none d-sm-block">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                <img className="birthdayImg" 
                        src="https://e7.pngegg.com/pngimages/295/410/png-clipart-christmas-gift-christmas-gift-gift-miscellaneous-ribbon-thumbnail.png"
                alt="" />
                <span className="birthdayText">
                    <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
                </span>
                </div>
                <img className="rightbarAd" src="assets/ad.png" alt="" />
                {/* online friends */}
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList ">
                    <Online/>
                </ul>
                <hr className="sidebarHr" />
                {/* friend suggestions */}
                <h4 className="rightbarTitle">Suggestions</h4>
                <ul className="sidebarFriendList">
                    <Suggestions/>
                </ul>
        
            </div>
        </div>        
        )
}
