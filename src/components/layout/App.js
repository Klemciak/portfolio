import "../styles/App.scss"
import Navigation from "./Navigation"
import Start from "./Start"
import About from "./About"
function App() {
  return (
    <div className="fullWrap">
      <nav>{<Navigation />}</nav>
      <header>{<Start />}</header>
      <body>{<About />}</body>
    </div>
  )
}

export default App
