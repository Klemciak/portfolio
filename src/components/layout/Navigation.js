import React from "react"
import "../styles/Navigation.scss"
const Navigation = () => {
  return (
    <div className="navWrap">
      <div className="navWrap_nick">
        <span className="navWrap_nick_K">K</span>
        <span className="navWrap_nick_L">L</span>
        <span className="navWrap_nick_E">E</span>
        <span className="navWrap_nick_M">M</span>
        <span className="navWrap_nick_C">C</span>
        <span className="navWrap_nick_I">I</span>
        <span className="navWrap_nick_A">A</span>
        <span className="navWrap_nick_lastK">K</span>
      </div>

      <div className="navWrap_nav">
        <div className="nav_start">Start</div>
        <div className="nav_about">O mnie</div>
        <div className="nav_project">Projekt</div>
        <div className="nav_contact">Kontakt</div>
      </div>
    </div>
  )
}

export default Navigation
