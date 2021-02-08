import React from "react"

import './Footer.scss'

import cert from '../../shared/docs/cert.pdf'
import ustav from '../../shared/docs/ustav.pdf'

const Footer = () => {
  return <footer>
    <div className="documents">
      <a href={cert} target = "_blank" rel="noreferrer" className="documents-item">Раскрытие информации Сертификат</a>
      <a href={ustav} target = "_blank" rel="noreferrer" className="documents-item">Раскрытие информации Устав</a>
    </div>
    <div className="documents documents-info">
      <span className="document-info-copyright">
        © ООО "ЗУБР ЛИЗИНГ" 2020. Все права защищены
      </span>
    </div>
  </footer>
}

export {
  Footer
}
