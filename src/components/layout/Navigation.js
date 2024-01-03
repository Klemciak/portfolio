import React from "react"
import { Link, animateScroll as scroll } from "react-scroll"
import "../styles/Navigation.scss"
const Navigation = () => {
  const scrollToTop = () => {
    scroll.scrollToTop()
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
        <Link to="start" smooth={true} duration={500} className="nav_start" onClick={scrollToTop}>
          Start
        </Link>
        <Link to="about" smooth={true} duration={500} offset={-70} className="nav_about">
          O mnie
        </Link>
        <Link to="project" smooth={true} duration={500} offset={-70} className="nav_project">
          Projekt
        </Link>
        <Link to="contact" smooth={true} duration={500} className="nav_contact">
          Kontakt
        </Link>
      </div>
    </div>
  )
}

export default Navigation
