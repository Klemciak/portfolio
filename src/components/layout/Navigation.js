import React, { useEffect, useState } from "react"
import "../styles/Navigation.scss"
const Navigation = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [topValueAbout, setTopValueAbout] = useState(825)
  const [topValueProject, setTopValueProject] = useState(1700)
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  const scrollToStart = () => {
    window.scrollTo({
      top: 20,
      behavior: "smooth",
    })
  }
  const scrollToAbout = () => {
    window.scrollTo({
      top: topValueAbout,
      behavior: "smooth",
    })
  }
  const scrollToProject = () => {
    window.scrollTo({
      top: topValueProject,
      behavior: "smooth",
    })
  }
  const scrollToContact = () => {
    window.scrollTo({
      top: 10000,
      behavior: "smooth",
    })
  }
  useEffect(() => {
    if (windowWidth <= 320) {
      setTopValueProject(3500)
      setTopValueAbout(1020)
    } else if (windowWidth <= 400) {
      setTopValueProject(3420)
      setTopValueAbout(1020)
    } else if (windowWidth <= 750) {
      setTopValueProject(3360)
      setTopValueAbout(1050)
    } else if (windowWidth <= 1000) {
      setTopValueProject(2580)
      setTopValueAbout(1050)
    } else if (windowWidth <= 1050) {
      setTopValueAbout(1050)
      setTopValueProject(2380)
    } else {
      setTopValueAbout(850)
      setTopValueProject(1700)
    }
  }, [windowWidth])
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
