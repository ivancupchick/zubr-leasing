import React from "react"

import Carousel from 'react-bootstrap/Carousel'

import './CommonCarouselMenu.scss'

function getButton(props: any, url: string) {
  if (props.url !== url) {
    return <button>Подробнее</button>;
  }
  return '';
}

const CommonCarouselMenu = (props: {url: string}) => {
  return <Carousel>
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
        { getButton(props, 'individual') }
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
        { getButton(props, 'legalPerson') }
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
}

export {
  CommonCarouselMenu
}
