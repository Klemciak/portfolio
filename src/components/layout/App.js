import "../styles/App.scss"
import Navigation from "./Navigation"
import Start from "./Start"
import About from "./About"
import Projects from "./Projects"
function App() {
  return (
    <div className="fullWrap">
      <nav>{<Navigation />}</nav>
      <header>{<Start />}</header>
      <body>
        <div>{<About />}</div>
        <div>{<Projects />}</div>
      </body>
    </div>
  )
}

export default App
