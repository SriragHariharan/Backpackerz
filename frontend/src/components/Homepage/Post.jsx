import React from 'react'

export default function Post() {
  return (
    <>
        <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <div>
              <img
                className="postProfileImg"
                src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"
                alt=""
              />
            </div>
            <span className="postUsername">Ramesh vasudevan</span>
            <span className="postDate">01-01-2025</span>
          </div>
          <div className="postTopRight">
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hi people welcome all</span>
          <img className="postImg" 
            src="https://cdn.britannica.com/63/211663-050-A674D74C/Jonny-Bairstow-batting-semifinal-match-England-Australia-2019.jpg" 
            alt="" 
            />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <i className="fa-regular fa-heart me-1"></i>
            <i className="fa-solid fa-heart me-1" style={{color: "#ff0f0f"}}></i>
            <span className="postLikeCounter">1123 likes</span>
          </div>
          <div className="postBottomRight">
            <i className="fa-regular fa-comment me-1"></i>
            <span className="postCommentText">999</span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
