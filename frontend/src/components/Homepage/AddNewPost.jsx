import React from 'react'

export default function AddNewPost() {
  return (
    <>
         <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"
            alt=""
          />
          <input
            placeholder={"What's in your mind ?"}
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        {/* {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
          </div>
        )} */}
        <form className="shareBottom">
          <div className="shareOptions">
            
            <label htmlFor="file" className="shareOption">
                <i class="fa-solid fa-image me-1"></i>
                <span className="shareOptionText">Photo</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
              />
            </label>
            <div className="shareOption me-5">
              <i class="fa-solid fa-location-dot me-1"></i>
              <span className="shareOptionText">Location</span>
            </div>
          </div>
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
    </>
  )
}
