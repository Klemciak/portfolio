import React from "react"
import "../styles/Contact.scss"
const Contact = () => {
  return (
    <div className="contactWrap">
      <h2 className="contactWrap_title">Kontakt</h2>
      <div className="contactWrap_options">
        <div className="contactWrap_options_town">Miejscowość: Tymbark, Polska 📍</div>
        <div className="contactWrap_options_email">E-mail: klemcio@interia.pl 📧</div>
      </div>
      <span className="contactWrap_more">PS.: telefon załączony w CV 🤙😉</span>
    </div>
  )
}

export default Contact
