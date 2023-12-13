import React from "react"
import "../styles/Start.scss"
import faceImg from "../graphics/face.jpg"

const Start = () => {
  return (
    <div className="startWrap">
      <div className="startWrap_text">
        <div className="text_cloud">
          <h2 className="text_cloud_title">cześć</h2>
          <p className="text_cloud_text"> coś tu będzie o mnie krótko</p>
        </div>
        <div className="text_technology">Technologie webowe : screeen screeen screeen screeen</div>
      </div>
      <div className="startWrap_photo">
        <img src={faceImg} alt="osobiste zdjęcie" className="startWrap_photo_img" />
      </div>
    </div>
  )
}

export default Start
