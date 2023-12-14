import React from "react"
import "../styles/Start.scss"
import faceImg from "../graphics/face.jpg"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5, faCss3Alt, faSass, faJs, faReact } from "@fortawesome/free-brands-svg-icons"
const Start = () => {
  return (
    <div className="startWrap">
      <h2 className="startWrap_title">Start</h2>
      <div className="startWrap_text">
        <div className="text_cloud">
          <h2 className="text_cloud_title">Hej, mam na imię Karol ! 👋</h2>
          <p className="text_cloud_text">
            {" "}
            W ostatnim czasie poszerzam moją wiedzę z front-endu. Teraz już znam podstawy i pracuję nad rozwinięciem
            umiejętności projektowania responsywnych i atrakcyjnych interfejsów! 🌐💻
          </p>
        </div>
        <div className="text_technology">
          Wykorzystywane technologie:
          <Link to="https://www.w3schools.com/html/">
            <FontAwesomeIcon icon={faHtml5} className="text_technology_html" />
          </Link>
          <Link to="https://www.w3schools.com/css/">
            <FontAwesomeIcon icon={faCss3Alt} className="text_technology_css" />
          </Link>
          <Link to="https://sass-lang.com/">
            <FontAwesomeIcon icon={faSass} className="text_technology_sass" />
          </Link>
          <Link to="https://www.w3schools.com/js/">
            <FontAwesomeIcon icon={faJs} className="text_technology_js" />
          </Link>
          <Link to="https://react.dev/">
            <FontAwesomeIcon icon={faReact} className="text_technology_react" />
          </Link>
        </div>
      </div>
      <div className="startWrap_photo">
        <img src={faceImg} alt="osobiste zdjęcie" className="startWrap_photo_img" />
      </div>
    </div>
  )
}

export default Start
