import React, { useState } from 'react';
import './Header.scss';

import { Button, Form, Modal, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const REACT_APP_API_URL = "http://zubr-leasing.by/api/email";
export const REACT_APP_API_URL_prod = "./api/email";
export const API_URL = process.env.NODE_ENV === "development" ? REACT_APP_API_URL : REACT_APP_API_URL_prod;

// const post = async () => {
//   const response = await fetch(API_URL);
//   const data: GetVehicle[] = await response.json();
//   return data;
// }

const HeaderComponent = () => {
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

  return <header className="header">
    <div className="header-top">
      <div className="header-holder">
        {/* <div className="logo-wrap">

        </div> */}

        <div className="header-holder-rs">
          <a
            className={"logo-wrap-logo"}
            title="Лизинговые услуги в Минске, купить авто в лизинг в Беларуси (РБ)"
            href="/"
          >
            Лизинговые услуги в Минске, купить авто в лизинг в Беларуси (РБ)
          </a>
          <div className="header-holder-rs-contacts">
            <div className="header-holder-rs-contacts-controls">
              <div className="header-holder-rs-contacts-controls-inner">
                <span className="header-holder-rs-contacts-controls-inner-number">
                  +375 (33) <span>651-12-12</span>
                </span>
              </div>
            </div>
          </div>
          <div className="mode">
            <div className="mode-wrapper">
              <span className="mode-wrapper-title">График работы:</span>
              <div className="mode-wrapper-holder">
                <div className="mode-inner">
                  <div className="mode-graph">
                      <span className="mode-day"></span>
                      <span className="mode-day"></span>
                      <span className="mode-day"></span>
                      <span className="mode-day"></span>
                      <span className="mode-day"></span>
                  </div>
                  <span className="mode-time">9:00 - 17:30</span>
                </div>
                <div className="mode-inner mode-inner_type_holiday">
                    <div className="mode-graph">
                        <span className="mode-day mode-day_type_holiday"></span>
                        <span className="mode-day mode-day_type_holiday"></span>
                    </div>
                    <span className="mode-time">вых</span>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="btn">
            <Button variant="link" onClick={handleShow} className="btn-personal">
              <span>Отправить заявку</span>
              {/* <span style={{ visibility: 'hidden' }} className="absl">вход</span> */}
            </Button >
          </div>
          {/*  */}
        </div>
      </div>
    </div>
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Главная</Nav.Link>
          <Nav.Link as={Link} to="/individual">Физ. лицам</Nav.Link>
          <Nav.Link as={Link} to="/legal">Юр. лицам</Nav.Link>
          <Nav.Link as={Link} to="/catalog">Каталог</Nav.Link>
          <Nav.Link as={Link} to="/about">О компании</Nav.Link>
          <Nav.Link as={Link} to="/contacts">Контакты</Nav.Link>
          {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        {/* <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav> */}
      </Navbar.Collapse>
    </Navbar>

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
  </header>
}

export {
  HeaderComponent
}
