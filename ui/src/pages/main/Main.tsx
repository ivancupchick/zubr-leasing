import React from "react"

import Carousel from 'react-bootstrap/Carousel'
import { CommonCarouselMenu } from "../../shared/components/CommonCarouselMenu.tsx/CommonCarouselMenu"
import { ContactsBlock } from "../../shared/components/ContactsBlock/ContactsBlock"
import { Footer } from "../footer/Footer"
import carActua1 from './carActual1.jpeg'

import './Main.scss'

const Main = () => {
  return <div>
    <div className="firstScreen">
      <CommonCarouselMenu url=""></CommonCarouselMenu>
    </div>

    <section className="screen secondScreen">
      <div className="auto left-auto">
        <span className="animate__slideInDown">
          Лизинг автомобилей для физических лиц
        </span>
      </div>
      <div className="auto right-auto">
      <span>
          Лизинг автомобилей для юридических лиц и ип
        </span>
      </div>
    </section>

    <section className="screen thirdScreen">
      <h2>Актуальные предложения</h2>
      <Carousel>
        <Carousel.Item>
          <div className="cars">
            <div className="cars-item">
              <a href="/" className="cars-item-img">
                <img src={carActua1} alt="" title=""/>
              </a>
              <div className="cars-item-description">
                <a href="/">BMW 7 серия</a>
                <span className="cars-item-description-price usd">
                168 334 USD
                </span>
                <span className="cars-item-description-price">
                428 831.00 BYN
                </span>
              </div>
            </div>
          </div>
          {/* <Carousel.Caption>

          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
      <button>Смотреть ещё</button>
    </section>

    <section className="screen fourthScreen">
      <ContactsBlock></ContactsBlock>
    </section>

    <section className="screen fifthScreen">
      <Footer></Footer>
    </section>
  </div>
}

export {
  Main
}
