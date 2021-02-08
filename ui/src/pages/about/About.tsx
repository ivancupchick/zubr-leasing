import React from "react"
import { ContactsBlock } from "../../shared/components/ContactsBlock/ContactsBlock"
import { Footer } from "../footer/Footer"

import cert from '../../shared/docs/cert.pdf'
import ustav from '../../shared/docs/ustav.pdf'

import './About.scss'

const About: React.FC = () => {
  return <section className="about-page">
    <div className="first">
      <div className="first-part">
        <h2>О компании</h2>
        <p>
          ООО “ЗУБР ЛИЗИНГ”
          <br/>
          Юридический адрес: 220055, г. Минск, ул. Каменногорская, д. 45, оф. 101
          <br/>
          Адрес офиса: 220055, г. Минск, ул. Каменногорская, д. 45, оф. 101
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
          Директор Купчик Антон Иванович, действующий на основании Устава
        </p>
      </div>
    </div>

    <div className="second">
      <div className="second-part">
        <div className="second-part-content">
          {/* <p> */}
            Мы концентрируем свои усилия на развитии транспортной отрасли, т.к. именно в этом видим будущее страны и ваш успех. "ЗУБР ЛИЗИНГ" является профессионалом в разработке решений по автолизингу.
            <br/>
            В основе нашего подхода – забота о Клиентах. Именно поэтому Вы получаете быстрый, простой и выгодный финансовый сервис.
          {/* </p> */}
          <ul>
            <li>Быстро: ответ – в момент подачи документов; средняя сделка – 5 дней.</li>
            <li>Просто: документы легко собрать.</li>
            <li>Выгодно: лучшие ценовые решения среди небанковских операторов.</li>
          </ul>

          <br/>

          <a href={cert} target = "_blank" rel="noreferrer">Раскрытие информации Сертификат</a>
          <br/>
          <br/>
          <a href={ustav} target = "_blank" rel="noreferrer">Раскрытие информации Устав</a>
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
