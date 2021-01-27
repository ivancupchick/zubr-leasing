import React from "react"

import './Footer.scss'

const Footer = () => {
  return <footer>
    <div className="documents">
      <a href="/" className="documents-item">Раскрытие информации Активлизинг</a>
      <a href="/" className="documents-item">Раскрытие информации Актив-Рент</a>
    </div>
    <div className="documents documents-info">
      <span className="document-info-copyright">
        © Зубр-лизинг 2020. Все права защищены
      </span>
    </div>
  </footer>
}

export {
  Footer
}
