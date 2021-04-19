import React, { useState } from "react";
import { CommonCarouselMenu } from "../../shared/components/CommonCarouselMenu.tsx/CommonCarouselMenu";

import "./Individual.scss";
import { Footer } from "../footer/Footer";
import { LeasingDescription, LeasingDescriptionProps } from "../../shared/components/LeasingDescription/LeasingDescription";
import { DocumentsBlock } from "../../shared/components/DocumentsBlock/DocumentsBlock";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { CustomSlider } from "../../shared/components/CustomSlider/CustomSlider";
import { calculatePLT } from "./leasingCalculationFuncs";
import individualPackage from '../../shared/docs/individual-package.docx';

const leasingDescriptionProps: LeasingDescriptionProps = {
  title: 'Лизинг для физических лиц',
  table: {
    columnHeaders: [
      'Преимущества лизинга:',
      'Условия лизинга:'
    ],
    columns: [
      [
        'Гибкий график погашения лизинговых платежей',
        'Быстрое оформление',
        'Минимальный пакет документов',
        'Специальные программы финансирования'
      ], [
        'Легковые автомобили новые и б/у до 10 лет',
        'Собственное участие от 20%',
        'Срок лизинга до 60 месяцев',
        'Валюты договора: USD',
        'Возраст: от 18 до 65 лет',
        'Гражданство РБ или вид на жительство'
      ]
    ]
  },
  isIndividual: true
}

const Individual: React.FC = () => {
  const [priceValue, setPriceValue] = useState<number>(0);
  const onChangePriceValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceValue(+e.target.value || 0);
  }
  const [firstPaymentValue, setFirstPaymentValue] = useState<number>(0);
  const onChangeFirstPaymentValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstPaymentValue(+e.target.value || 0);
  }

  const [nameValue, setNameValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');

  return (
    <div className="wrapper">
      <CommonCarouselMenu url="individual"></CommonCarouselMenu>
      <section className="commonContent">
        <LeasingDescription {...leasingDescriptionProps}></LeasingDescription>
      </section>
      {/* <section className="layout-section">
      <div className="layout-holder">
        <div className="layout-heading">
        <h2 className="layout-title">
          Продукты для физических лиц
        </h2>
        <span className="layout-title_span"></span>
        </div>
        <div className="business">
          <div className="auto bsiness-img"> <span>Лизинг атомобилей с пробегом</span></div>
          <span>Лизинг атомобилей с пробегом</span>
          <img src="src/pages/individual/img2.jpg" alt=""/>
          <span>Скоро! новый продукт</span>
        </div>
      </div>
    </section> */}

      <section className="calculateSection">
        <div className="calculateSection-container">
          <h2>Рассчитать лизинг</h2>
          <div className="calculateSection-container-slides">
            <div className="calculateSection-container-slides-price">
              <div className="calculateSection-container-slides-price-field">
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-price">Стоимость автомобиля</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    aria-label="price"
                    aria-describedby="inputGroup-sizing-price"
                    value={priceValue}
                    onChange={onChangePriceValue}
                  />
                </InputGroup>
              </div>
              <CustomSlider value={priceValue} onChange={setPriceValue} max={40000} min={5000} step={500}></CustomSlider>
            </div>
            <div className="calculateSection-container-slides-firstPayment">
              <div className="calculateSection-container-slides-firstPayment-field">
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-firstPayment">Авансовый платёж</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    aria-label="firstPayment"
                    aria-describedby="inputGroup-sizing-firstPayment"
                    value={firstPaymentValue}
                    onChange={onChangeFirstPaymentValue}
                  />
                </InputGroup>
              </div>
              <CustomSlider value={firstPaymentValue} onChange={setFirstPaymentValue} min={20} step={5} max={40}></CustomSlider>
            </div>
          </div>
          <div className="calculateSection-container-programs">
            <div className="calculateSection-container-programs-standart">
              <h3>Программа "Стандартный лизинг"</h3>
              <table>
                <thead>
                  <tr>
                    <th>Срок:</th>
                    <th>Платёж:</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1 год</td>
                    <td>{ calculatePLT(priceValue, 12, 25, firstPaymentValue) }</td>
                  </tr>
                  <tr>
                    <td>2 года</td>
                    <td>{ calculatePLT(priceValue, 24, 25, firstPaymentValue) }</td>
                  </tr>
                  <tr>
                    <td>3 года</td>
                    <td>{ calculatePLT(priceValue, 36, 25, firstPaymentValue) }</td>
                  </tr>
                  <tr>
                    <td>4 года</td>
                    <td>{ calculatePLT(priceValue, 48, 25, firstPaymentValue) }</td>
                  </tr>
                  <tr>
                    <td>5 лет</td>
                    <td>{ calculatePLT(priceValue, 60, 25, firstPaymentValue) }</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="calculateSection-container-programs-euro">
              <h3>Программа "Евролизинг"</h3>
              <table>
                <thead>
                  <tr>
                    <th>Срок:</th>
                    <th>Платёж:</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1 год</td>
                    <td>{ calculatePLT(priceValue, 12, 17, firstPaymentValue) }</td>
                  </tr>
                  <tr>
                    <td>2 года</td>
                    <td>{ calculatePLT(priceValue, 24, 17, firstPaymentValue) }</td>
                  </tr>
                  <tr>
                    <td>3 года</td>
                    <td>{ calculatePLT(priceValue, 36, 17, firstPaymentValue) }</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="calculateSection-container-request">
            <div className="calculateSection-container-request-fields">
              <div className="calculateSection-container-request-fields-name">
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-nameValue">Имя</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    aria-label="nameValue"
                    aria-describedby="inputGroup-sizing-nameValue"
                    value={nameValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setNameValue(e.target.value || '') }}
                  />
                </InputGroup>
              </div>
              <div className="calculateSection-container-request-fields-phone">
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-phoneValue">Телефон</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    aria-label="phoneValue"
                    aria-describedby="inputGroup-sizing-phoneValue"
                    value={phoneValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setPhoneValue(e.target.value || '') }}
                  />
                </InputGroup>
              </div>
            </div>
            <div className="calculateSection-container-request-container">
              <Button variant="primary">Отправить</Button>
            </div>
          </div>
        </div>
      </section>

      <DocumentsBlock buttonIsNotExist={true} uploadDocsUrl={individualPackage} uploadDocsUrlSize="40 Кб"></DocumentsBlock>
      <Footer></Footer>
    </div>
  );
};

export { Individual };
