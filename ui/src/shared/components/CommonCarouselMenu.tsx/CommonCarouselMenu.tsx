import React from "react"

import Carousel from 'react-bootstrap/Carousel'

import firstSlideImage from './carouselImage/1.png'
import secondSlideImage from './carouselImage/2.jpg'
import thirdSlideImage from './carouselImage/3.jpg'
import fourthSlideImage from './carouselImage/4.png'
import fivthSlideImage from './carouselImage/5.png'

import './CommonCarouselMenu.scss'

function getButton(props: any, text: string, url?: string,) {
  if (props.url === url && url) {
    return '';
  }
  return <a className="button" href="/">{text}</a>;
}

type CarouselItems = {
  slideUrl: string;

  texts: {
    title: string;
    subTitle: string;
    exprasionTextForButton: string;
    buttonText: string;
  }
}[];

const carouselItems: CarouselItems = [{
  slideUrl: firstSlideImage,
  texts: {
    title: 'Волшебные дни продаж Volvo',
    subTitle: 'Рекордные выгожы до 31 января 2021',
    exprasionTextForButton: '',
    buttonText: 'Подробнее'
  }
}, {
  slideUrl: secondSlideImage,
  texts: {
    title: 'Лизинг авто для физических лиц',
    subTitle: 'Ежемесячные платежи стали ещё ниже',
    exprasionTextForButton: 'individual',
    buttonText: 'Подробнее'
  }
}, {
  slideUrl: thirdSlideImage,
  texts: {
    title: 'Лизинг для юридических лиц',
    subTitle: 'Премиум сервис на доступных условиях',
    exprasionTextForButton: 'legalPerson',
    buttonText: 'Подробнее'
  }
}, {
  slideUrl: fourthSlideImage,
  texts: {
    title: 'Актив assistance - услуга помощи при страховом случае',
    subTitle: '',
    exprasionTextForButton: '',
    buttonText: 'Подробнее'
  }
}, {
  slideUrl: fivthSlideImage,
  texts: {
    title: 'Меняйте старый автомобиль',
    subTitle: 'Программа Trade-in для новых и б\\у автомобилей',
    exprasionTextForButton: '',
    buttonText: 'Подробнее'
  }
}];

const CommonCarouselMenu = (props: {url: string}) => {
  return <Carousel>
    {
      carouselItems.map((ci, i) => {
        return <Carousel.Item key={i}>
        <div
          className="img d-block w-100"
          style={{ backgroundImage: `url(${ci.slideUrl})` }}
          // src={secondSlide}
          // alt="Лизинг авто для физических лиц"
        />
        {ci.slideUrl}
        <Carousel.Caption>
          <div className="wrapper-caption">
            <div className="wrapper-caption-content">
              <span className="wrapper-caption-content-title">{ ci.texts.title }</span>
              <span className="wrapper-caption-content-subTitle">{ ci.texts.subTitle }</span>
              { getButton(props, ci.texts.buttonText, ci.texts.exprasionTextForButton) }
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      })
    }
  </Carousel>
}

export {
  CommonCarouselMenu
}
