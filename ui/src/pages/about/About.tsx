import React from "react"
import { ContactsBlock } from "../../shared/components/ContactsBlock/ContactsBlock"
import { Footer } from "../footer/Footer"

import gosreg from '../../shared/docs/gosreg.pdf'
import ustav from '../../shared/docs/ustav.pdf'
import inLeasingComps from '../../shared/docs/inLeasingComps.pdf'
import yearResults2021 from '../../shared/docs/yearResults2021.pdf'
import prim2021 from '../../shared/docs/prim2021.pdf'

import './About.scss'

const About: React.FC = () => {
  return <section className="about-page">
    <div className="first">
      <div className="first-part">
        <h2>О компании</h2>
        <p>
          ООО “ЗУБР ЛИЗИНГ”
          <br/>
          Юридический адрес: 220080, г. Минск, ул. МКАД, д. 303, пом. 02П-Ж
          <br/>
          Адрес офиса: 220080, г. Минск, ул. МКАД, д. 303, пом. 02П-Ж
          <br/>
          УНП 193498948
          <br/>
          р/с № BY17 BLNB 3011 0000 3231 8100 0933
          <br/>
          (в белорусских рублях)
          <br/>
          в ОАО БНБ-Банк,
          <br/>
          БИК BLNBBY2X, УНП банка 100513485
          <br/>
          г. Минск, Пр-т Независимости 87a
          <br/>
          {/* Директор Купчик Антон Иванович, действующий на основании Устава */}
        </p>
      </div>
    </div>

    <div className="second">
      <div className="second-part">
        <div className="second-part-content">
          {/* <p> */}
          Наша компания ставит перед собой цель сделать финансовый лизинг автомобилей удобнее и доступнее для каждого человека или компании. Для этого, мы разрабатываем разные подходы и специальные лизинговые программы, нацеленные на удовлетворение любых потребностей и желаний наших клиентов в области финансового лизинга автомобилей. Наши главные преимущества это индивидуальный подход к каждому клиенту, скорость работы и выгодные условия финансового лизинга.
          {/* </p> */}
          {/* <ul>
            <li>Быстро: ответ – в момент подачи документов; средняя сделка – 5 дней.</li>
            <li>Просто: документы легко собрать.</li>
            <li>Выгодно: лучшие ценовые решения среди небанковских операторов.</li>
          </ul> */}

          <br/>
          <br/>

          <a href={gosreg} target = "_blank" rel="noreferrer">Свидетельство о государственной регистрации юридического лица</a>
          <br/>
          <br/>
          <a href={ustav} target = "_blank" rel="noreferrer">Устав</a>
          <br/>
          <br/>
          <a href={inLeasingComps} target = "_blank" rel="noreferrer">Свидетельство о включении в реестр лизинговых организаций</a>
          <br/>
          <h3>Отчетность:</h3>
          <br/>
          <p>Размер уставного фонда ООО «ЗУБР ЛИЗИНГ»: 125 000 белорусских рублей.
            <br />
            Виды сделок, осуществляемых в рамках лизинговой деятельности: финансовый лизинг транспортных средств для физических и юридических лиц
          </p>
          <br/>
          <a href={yearResults2021} target = "_blank" rel="noreferrer">Годовая финансовая отчетность 2021</a>
          <br/>
          <br/>
          <a href={prim2021} target = "_blank" rel="noreferrer">Примечание 2021</a>
        </div>
      </div>
    </div>
    <ContactsBlock></ContactsBlock>
    <Footer></Footer>
  </section>

}

export {
  About
}
