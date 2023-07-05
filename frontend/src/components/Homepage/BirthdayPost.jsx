// this post will only be displayed in mobile devices
import React from 'react'

export default function BirthdayPost() {
  return (
            <div className="birthdayContainer mt-3 border border-3 border-warning p-3 d-block d-sm-none">
                <img className="birthdayImg" 
                src="https://e7.pngegg.com/pngimages/295/410/png-clipart-christmas-gift-christmas-gift-gift-miscellaneous-ribbon-thumbnail.png"
                alt="" />
                <span className="birthdayText">
                    Pola Foster and 3 other friends have a birthday today.
                </span>
            </div>  
        )
}
