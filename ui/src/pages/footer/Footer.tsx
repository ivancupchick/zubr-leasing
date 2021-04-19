import React from "react"

import './Footer.scss'

// import cert from '../../shared/docs/cert.pdf'
// import ustav from '../../shared/docs/ustav.pdf'
import gosreg from '../../shared/docs/gosreg.pdf'
import ustav from '../../shared/docs/ustav.pdf'
import inLeasingComps from '../../shared/docs/inLeasingComps.pdf'

const Footer = () => {
  return <footer>
    <div className="documents">
      <a href={gosreg} target = "_blank" rel="noreferrer" className="documents-item">
        Свидетельство о государственной регистрации юридического лица
      </a>
      <a href={ustav} target = "_blank" rel="noreferrer" className="documents-item">
        Устав
      </a>
      <a href={inLeasingComps} target = "_blank" rel="noreferrer" className="documents-item">
        Свидетельство о включении в реестр лизинговых организаций
      </a>
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
