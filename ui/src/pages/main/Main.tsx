import React from "react"

import Carousel from 'react-bootstrap/Carousel'
// import firstSlide from './carouselImage/1.png'
// import secondSlide from './carouselImage/2.jpg'
// import thirdSlide from './carouselImage/3.jpg'
// import fourthSlide from './carouselImage/4.png'
import carActua1 from './carActual1.jpeg'

import './Main.scss'

const Main = () => {
  return <div>
    <div className="firstSilde">
      <Carousel>
        <Carousel.Item>
          <div
            className="img firstSlide d-block w-100"
            // src={firstSlide}
            // alt="Волшебные дни продаж Volvo"
          />
          <Carousel.Caption>
            <h3>Волшебные дни продаж Volvo</h3>
            <p>Рекордные выгожы до 31 января 2021</p>
            <button>Подробнее</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="img secondSlide d-block w-100"
            // src={secondSlide}
            // alt="Лизинг авто для физических лиц"
          />
          <Carousel.Caption>
            <h3>Лизинг авто для физических лиц</h3>
            <p>Ежемесячные платежи стали ещё ниже</p>
            <button>Подробнее</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="img thirdSlide d-block w-100"
            // src={thirdSlide}
            // alt="Лизинг для юридических лиц"
          />
          <Carousel.Caption>
            <h3>Лизинг для юридических лиц</h3>
            <p>Премиум сервис на доступных условиях</p>
            <button>Подробнее</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="img fourthSlide d-block w-100"
            // src={fourthSlide}
            // alt="Актив assistance"
          />
          <Carousel.Caption>
            <h3>Актив assistance - услуга помощи при страховом случае</h3>
            {/* <p>Премиум сервис на доступных условиях</p> */}
            <button>Подробнее</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="img fifthSlide d-block w-100"
            // src={fifthSlide}
            // alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Меняйте старый автомобиль</h3>
            <p>Программа Trade-in для новых и б\у автомобилей</p>
            <button>Подробнее</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
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
  </div>
}

export {
  Main
}
