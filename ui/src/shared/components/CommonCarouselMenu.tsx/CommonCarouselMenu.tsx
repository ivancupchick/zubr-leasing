import React, { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"

import Carousel from 'react-bootstrap/Carousel'

import firstSlideImage from './carouselImage/1.jpg'
import secondSlideImage from './carouselImage/2.jpg'
import thirdSlideImage from './carouselImage/3.jpg'
// import fourthSlideImage from './carouselImage/4.png'
// import fivthSlideImage from './carouselImage/5.png'

import './CommonCarouselMenu.scss'

export const REACT_APP_API_URL = "http://zubr-leasing.by/api/email";
export const REACT_APP_API_URL_prod = "./api/email";
export const API_URL = process.env.NODE_ENV === "development" ? REACT_APP_API_URL : REACT_APP_API_URL_prod;

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
    title: 'ЛИЗИНГ АВТО ДЛЯ ФИЗИЧЕСКИХ ЛИЦ',
    subTitle: 'УДОБНЫЕ ГРАФИКИ ПЛАТЕЖЕЙ',
    exprasionTextForButton: 'individual',
    buttonText: 'Подробнее'
  }
}, {
  slideUrl: secondSlideImage,
  texts: {
    title: 'ЛИЗИНГ АВТО ДЛЯ ЮРИДИЧЕСКИХ ЛИЦ',
    subTitle: 'НОВЫХ И Б/У АВТОМОБИЛЕЙ',
    exprasionTextForButton: 'legalPerson',
    buttonText: 'Подробнее'
  }
}, {
  slideUrl: thirdSlideImage,
  texts: {
    title: 'ЛИЗИНГ НОВЫХ АВТОМОБИЛЕЙ',
    subTitle: 'ВЫГОДНЫЕ ФИНАНСОВЫЕ ПРОГРАММЫ',
    exprasionTextForButton: 'sendMail',
    buttonText: 'Подробнее'
  }
}/**, {
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
}**/];

type Props = {
  url: string;
}

const CommonCarouselMenu: React.FC<Props> = (props: Props) => {
  const getButton = (props: any, text: string, url?: string) => {
    if (props.url === url && url) {
      return '';
    }

    if (url === 'sendMail') {
      return <a className="button" onClick={handleShow} >{text}</a>;
    }

    return <a className="button" href="/" >{text}</a>;
  }

  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleClose = (isNotClose: boolean) => {
    if (isNotClose) {
      console.log(name);
      console.log(phone);

      fetch(API_URL, {
          method: "POST",
          body: JSON.stringify({ name, phone}),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        }).then(
        (response) => (response.json())
          ).then((response)=> {
        if (response.status === 'success') {
          alert("Заявка успешно отправлена");
          setName('');
          setPhone('');
          setShow(false)
        } else if(response.status === 'fail') {
          alert("Заявка не отправлена, свяжитесь пожалуйста по телефону")
          setShow(false)
        }
      })
    } else {
      setShow(false)
    }
  };
  const handleShow = () => setShow(true);

  return <>
    <Carousel>
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

    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Заявка на консультацию</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form>
      <Form.Group controlId="formBasicName">
        <Form.Label>Имя</Form.Label>
        <Form.Control onChange={(event) => setName(event.target.value)} type="name" placeholder="Введите имя" />
      </Form.Group>

      <Form.Group controlId="formBasicPhone">
        <Form.Label>Номер телефона</Form.Label>
        <Form.Control onChange={(event) => setPhone(event.target.value)} type="phone" placeholder="+375290000000" />
      </Form.Group>
    </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={(e) => handleClose(false)}>
        Закрыть
      </Button>
      <Button variant="primary" onClick={(e) => handleClose(true)}>
        Отправить
      </Button>
    </Modal.Footer>
    </Modal>
  </>
}

export {
  CommonCarouselMenu
}
