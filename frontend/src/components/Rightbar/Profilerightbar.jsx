import React from 'react'

export default function Profilerightbar() {
  return (

      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Cochin</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Palakkad</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
                Single
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        
        <div className="row">
            
        
        <div className="rightbarFollowings col-4">
            <div style={{ textDecoration: "none" }}>
              <div className="rightbarFollowing">
                <img
                    src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"

                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">Mahesh</span>
              </div>
            </div>
        </div>

        <div className="rightbarFollowings col-4">
            <div style={{ textDecoration: "none" }}>
              <div className="rightbarFollowing">
                <img
                    src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"

                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">Mahesh</span>
              </div>
            </div>
        </div>

        <div className="rightbarFollowings col-4">
            <div style={{ textDecoration: "none" }}>
              <div className="rightbarFollowing">
                <img
                    src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"

                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">Mahesh</span>
              </div>
            </div>
        </div>

        <div className="rightbarFollowings col-4">
            <div style={{ textDecoration: "none" }}>
              <div className="rightbarFollowing">
                <img
                    src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"

                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">Mahesh</span>
              </div>
            </div>
        </div>

        <div className="rightbarFollowings col-4">
            <div style={{ textDecoration: "none" }}>
              <div className="rightbarFollowing">
                <img
                    src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"

                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">Mahesh</span>
              </div>
            </div>
        </div>
        </div>
      </>  
    )
}
