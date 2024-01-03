import "../styles/App.scss"
import Navigation from "./Navigation"
import Start from "./Start"
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"
function App() {
  return (
    <div className="fullWrap">
      <nav>{<Navigation />}</nav>
      <header>{<Start />}</header>
      <div className="body">
        <div>{<About />}</div>
        <div>{<Projects />}</div>
      </div>
      <footer>{<Contact />}</footer>
    </div>
  )
}

export default App
