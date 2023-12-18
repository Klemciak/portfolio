import React from "react"
import "../styles/Navigation.scss"
const Navigation = () => {
  const scrollToStart = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  const scrollToAbout = () => {
    window.scrollTo({
      top: 800,
      behavior: "smooth",
    })
  }
  const scrollToProject = () => {
    window.scrollTo({
      top: 1700,
      behavior: "smooth",
    })
  }
  const scrollToContact = () => {
    window.scrollTo({
      top: 3000,
      behavior: "smooth",
    })
  }
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
        <div className="nav_start" onClick={scrollToStart}>
          Start
        </div>
        <div className="nav_about" onClick={scrollToAbout}>
          O mnie
        </div>
        <div className="nav_project" onClick={scrollToProject}>
          Projekt
        </div>
        <div className="nav_contact" onClick={scrollToContact}>
          Kontakt
        </div>
      </div>
    </div>
  )
}

export default Navigation
