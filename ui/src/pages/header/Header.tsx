import React from 'react';
import './Header.scss';

import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const HeaderComponent = () => {
  return <header className="header">
    <div className="header-top">
      <div className="header-holder">
        <div className="logo-wrap">
          <a
            className={"logo-wrap-logo"}
            title="Лизинговые услуги в Минске, купить авто в лизинг в Беларуси (РБ)"
            href="/"
          >
            Лизинговые услуги в Минске, купить авто в лизинг в Беларуси (РБ)
          </a>
          <div className={"logo-wrap-numberOnePicture"}></div>
        </div>

        <div className="header-holder-rs">
          <div className="header-holder-rs-contacts">
            <div className="header-holder-rs-contacts-controls">
              <div className="header-holder-rs-contacts-controls-inner">
                <span className="header-holder-rs-contacts-controls-inner-number">
                  +375 (44) <span>766-60-01</span>
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
          <div className="header-holder-rs-btn">
            <a href="/" className="header-holder-rs-btn-personal">
              <span>Кабинет клиента</span>
              <span className="absl">вход</span>
            </a>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        {/* <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav> */}
      </Navbar.Collapse>
    </Navbar>
  </header>
}

export {
  HeaderComponent
}
