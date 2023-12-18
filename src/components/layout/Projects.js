import React from "react"
import "../styles/Projects.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faSistrix } from "@fortawesome/free-brands-svg-icons"
const Projects = () => {
  return (
    <div className="projectsWrap">
      <h2 className="projectsWrap_title">Projekt</h2>
      <div className="projectWrap">
        <div className="projectWrap_img"></div>
        <div className="projectWrap_description">
          <h3 className="projectWrap_description_title">auto-tuning 🚘</h3>
          <span className="projectWrap_description_text">
            Zobacz moją najnowszą stronę internetową. Ta strona stanowi efekt moich ostatnich wysiłków, podczas których
            wykorzystałem wszystkie umiejętności, jakie do tej pory zdobyłem. Głównym zamysłem kiedy ją projektowałem
            było ćwiczenie React.
          </span>
          <div className="projectWrap_description_links">
            <a href="https://github.com/Klemciak/autotuning">
              kod <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://klemciak.github.io/autotuning/">
              demonstracja <FontAwesomeIcon icon={faSistrix} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
