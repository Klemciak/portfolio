import React from "react"
import "../styles/About.scss"
import gifCat from "../graphics/cat.gif"
const About = () => {
  return (
    <div className="aboutWrap">
      <h2 className="aboutWrap_title">O mnie</h2>
      <span className="aboutWrap_shortDescriptionTop">
        Jestem osobą otwartą na nowe wyzwania, która zdecydowanie chce się rozwijać w dziedzinie front-endu. Moje cechy,
        umiejętności i cele zawodowe można opisać w następujący sposób:
      </span>
      <div className="aboutWrap_characteristicsAndGoals">
        <div className="characteristics">
          <ul className="characteristics_list">
            <h3 className="characteristics_list_title">Cechy</h3>
            <li className="characteristics_list_element">
              <strong>Otwarty na nową wiedzę 📚:</strong> Moje umiejętności są w ciągłym rozwoju, a ja zawsze jestem
              gotów na przyjęcie nowych wyzwań, by poszerzać swoją wiedzę.
            </li>
            <li className="characteristics_list_element">
              <strong>Zainteresowany front-endem 💻:</strong> Front-end to obszar, który nie tylko mnie interesuje, ale
              także stanowi źródło inspiracji do kreatywnego podejścia do projektowania interfejsów użytkownika.
            </li>
            <li className="characteristics_list_element">
              <strong>Wytrwały 🛠️:</strong> Zawsze staram się podejść do problemów z pozytywnym nastawieniem, poszukując
              efektywnych rozwiązań i ciągle doskonaląc moje umiejętności.
            </li>
            <li className="characteristics_list_element">
              <strong>Komunikatywny 🤝:</strong> Zależy mi na efektywnej współpracy zespołowej, dlatego stawiam na
              komunikację. Chętnie dzielę się swoimi pomysłami, słucham opinii innych i angażuję się w konstruktywną
              wymianę myśli.
            </li>
          </ul>
        </div>
        <div className="goals">
          <ul className="goals_list">
            <h3 className="goals_list_title">Cele zawodowe</h3>
            <li className="goals_list_element">
              <strong>Rozwój umiejętności technicznych 🚀:</strong> Dążę do doskonalenia umiejętności w zakresie HTML,
              CSS, JavaScript, React itp. by świadomie i skutecznie tworzyć responsywne interfejsy użytkownika.
            </li>
            <li className="goals_list_element">
              <strong>Kreatywne podejście do projektowania 🎨:</strong> Chcę rozwijać umiejętności projektowania
              interfejsów w sposób, który nie tylko spełnia oczekiwania funkcjonalne, ale także wzbudza zainteresowanie
              i pozytywne wrażenia użytkowników.
            </li>
            <li className="goals_list_element">
              <strong>Uczestnictwo w społeczności 👥:</strong> Planuję aktywnie uczestniczyć w społeczności
              front-endowej, aby wymieniać doświadczenia, zdobywać nowe perspektywy i być na bieżąco z najnowszymi
              trendami.
            </li>
            <li className="goals_list_element">
              <strong>Wszechstronny rozwój zawodowy 🎓:</strong> Poza front-endem, dążę do zdobycia umiejętności, które
              pozwolą mi być wszechstronnym profesjonalistą, gotowym na elastyczne reagowanie na zmieniające się
              wymagania branżowe.
            </li>
          </ul>
          <img className="goals_gifCat" src={gifCat} alt="kot machający ogonem" />
        </div>
      </div>
      <span className="aboutWrap_shortDescriptionBottom">
        Gotów na przyjęcie nowych wyzwań, łączę zapał z umiejętnościami, tworząc solidną podstawę do dynamicznego
        rozwoju w obszarze front-endu.
      </span>
    </div>
  )
}

export default About
