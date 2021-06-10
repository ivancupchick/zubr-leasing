import React from "react"

import Carousel from 'react-bootstrap/Carousel'
import { CommonCarouselMenu } from "../../shared/components/CommonCarouselMenu/CommonCarouselMenu"
import { ContactsBlock } from "../../shared/components/ContactsBlock/ContactsBlock"
import { Footer } from "../footer/Footer"
import carActua1 from './carActual1.jpeg'

import './Main.scss'

export type GetVehicle = {
  id: number;
  post_title?: string;
  post_name?: string;
  attachments?: string[];
  vehicle_overview?: string;
  year?: string;
  petrol?: string;
  engineCapacity?: string;
  transmission?: string;
  mileage?: string;
  bodyType?: string;
  wheelDrive?: string;
  price?: string;
  video?: string;
}

type Props = {
  cars: GetVehicle[];
  cur: number;
}

const Main: React.FC<Props> = ({ cars, cur }) => {
  const cars4: GetVehicle[][] = [];
  const cars2: GetVehicle[][] = [];
  cars.filter(c => c.post_title !== 'Черновик').forEach((c, i) => {
    if (i % 4 === 0) {
      cars4.push([c]);
    } else {
      cars4[cars4.length - 1].push(c);
    }
  })
  cars.filter(c => c.post_title !== 'Черновик').forEach((c, i) => {
    if (i % 2 === 0) {
      cars2.push([c]);
    } else {
      cars2[cars2.length - 1].push(c);
    }
  })

  return <div>
    <div className="firstScreen">
      <CommonCarouselMenu url=""></CommonCarouselMenu>
    </div>

    <section className="screen secondScreen">
      <div className="auto left-auto">
        <div className="background"></div>
        <h3 className="animate__slideInDown">ЛИЗИНГ АВТОМОБИЛЕЙ ДЛЯ ФИЗИЧЕСКИХ ЛИЦ</h3>
        <ul>
          <li>Новые и б/у автомобили до 10 лет</li>
          <li>Быстрое одобрение</li>
          <li>Минимальный пакет документов</li>
          <li>Удобные графики погашения</li>
          <li>Несколько вариантов программ</li>
          <li>Без дополнительных комиссий</li>
        </ul>
      </div>
      <div className="auto right-auto">
        <div className="background"></div>
        <h3>ЛИЗИНГ АВТОМОБИЛЕЙ ДЛЯ ЮРИДИЧЕСКИХ ЛИЦ</h3>
        <ul>
          <li>Новые и б/у автомобили до 10 лет</li>
          <li>Быстрое рассмотрение документов</li>
          <li>Удобные графики погашения</li>
          <li>Несколько вариантов программ</li>
          <li>Специальные условия лизинга</li>
        </ul>
      </div>
    </section>

    <section className="screen thirdScreen">
      <h2>Актуальные предложения</h2>
      <Carousel>
      {
        (window.innerWidth < 821 ? cars2 : cars4).filter((car4, i) => i < 5).map(с4 => {
          return (
            <Carousel.Item>
              <div className="cars">
                { с4.map(c => {
                  const url = `http://izy.by/inventory/${c.post_name}`
                  return (
                    <div className="cars-item">
                      <a href={url} target="_blank" rel="noreferrer" className="cars-item-img">
                        <img src={c.attachments ? c.attachments[0] : carActua1} alt="" title=""/>
                      </a>
                      <div className="cars-item-description">
                        <a href={url} target="_blank" rel="noreferrer" >{c.post_title}</a>
                        <span className="cars-item-description-price usd">
                          { c.price } USD
                        </span>
                        <span className="cars-item-description-price">
                          { (Number(c.price || 0) * cur).toFixed(2) } BYN
                        </span>
                      </div>
                    </div>
                  )
                }) }
              </div>
              {/* <Carousel.Caption>

              </Carousel.Caption> */}
            </Carousel.Item>
          )
        })
      }
      </Carousel>
      {/* <button>Смотреть ещё</button> */}
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
