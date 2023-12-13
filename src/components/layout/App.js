import "../styles/App.scss"
import Navigation from "./Navigation"
import Start from "./Start"
function App() {
  return (
    <div className="fullWrap">
      <nav>{<Navigation />}</nav>
      <header>{<Start />}</header>
    </div>
  )
}

export default App
