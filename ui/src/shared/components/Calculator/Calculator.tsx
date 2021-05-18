import React, { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { CustomSlider } from "../CustomSlider/CustomSlider";

import './Calculator.scss';
import { calculatePLT } from "./funcs";

export interface LeasingDescriptionProps {
  maxPriceInput?: number;
  minPriceInput?: number;
  stepPriceInput?: number;

  maxFirstPaymentInput?: number;
  minFirstPaymentInput?: number;
  stepFirstPaymentInput?: number;
}




const Calculator: React.FC<LeasingDescriptionProps> = (props: LeasingDescriptionProps) => {
  const [priceInputValue, setPriceInputValue] = useState<number>(0);
  const [priceSliderValue, setPriceSliderValue] = useState<number>(0);
  const onChangePriceInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceInputValue(+e.target.value || 0);
  }
  const onBlurPriceInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: number = +e.target.value || 0;
    let trueValue = props.maxPriceInput && value >= props.maxPriceInput
      ? props.maxPriceInput
      : props.minPriceInput && value <= props.minPriceInput
        ? props.minPriceInput
        : value;
    setPriceInputValue(trueValue || 0);
    setPriceSliderValue(trueValue || 0);
  }
  const onChangePriceSliderValue = (v: number) => {
    setPriceSliderValue(v || 0);
    setPriceInputValue(v || 0);
  }

  const [firstPaymentInputValue, setFirstPaymentInputValue] = useState<number>(0);
  const [firstPaymentSliderValue, setFirstPaymentSliderValue] = useState<number>(0);
  const onChangeFirstPaymentInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstPaymentInputValue(+e.target.value || 0);
  }
  const onBlurFirstPaymentInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: number = +e.target.value || 0;
    let trueValue = props.maxFirstPaymentInput && value >= props.maxFirstPaymentInput
      ? props.maxFirstPaymentInput
      : props.minFirstPaymentInput && value <= props.minFirstPaymentInput
        ? props.minFirstPaymentInput
        : value;

    console.log(trueValue);

    setFirstPaymentSliderValue(trueValue || 0);
    setFirstPaymentInputValue(trueValue || 0);
  }
  const onChangeFirstPaymentSliderValue = (v: number) => {
    setFirstPaymentSliderValue(v || 0);
    setFirstPaymentInputValue(v || 0);
  }

  const [nameValue, setNameValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');


  return <div className="calculateSection-container">
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
              value={priceInputValue}
              onChange={onChangePriceInputValue}
              onBlur={onBlurPriceInputValue}
            />
            <InputGroup.Append>
              <InputGroup.Text>$</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </div>
        <CustomSlider value={priceSliderValue} onChange={onChangePriceSliderValue} max={props.maxPriceInput} min={props.minPriceInput} step={props.stepPriceInput}></CustomSlider>
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
              value={firstPaymentInputValue}
              onChange={onChangeFirstPaymentInputValue}
              onBlur={onBlurFirstPaymentInputValue}
            />
            <InputGroup.Append>
              <InputGroup.Text>%</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </div>
        <CustomSlider value={firstPaymentSliderValue} onChange={onChangeFirstPaymentSliderValue} min={props.minFirstPaymentInput} step={props.stepFirstPaymentInput} max={props.maxFirstPaymentInput}></CustomSlider>
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
              <td>{ calculatePLT(priceSliderValue, 12, 25, firstPaymentSliderValue) }</td>
            </tr>
            <tr>
              <td>2 года</td>
              <td>{ calculatePLT(priceSliderValue, 24, 25, firstPaymentSliderValue) }</td>
            </tr>
            <tr>
              <td>3 года</td>
              <td>{ calculatePLT(priceSliderValue, 36, 25, firstPaymentSliderValue) }</td>
            </tr>
            <tr>
              <td>4 года</td>
              <td>{ calculatePLT(priceSliderValue, 48, 25, firstPaymentSliderValue) }</td>
            </tr>
            <tr>
              <td>5 лет</td>
              <td>{ calculatePLT(priceSliderValue, 60, 25, firstPaymentSliderValue) }</td>
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
              <td>{ calculatePLT(priceSliderValue, 12, 17, firstPaymentSliderValue) }</td>
            </tr>
            <tr>
              <td>2 года</td>
              <td>{ calculatePLT(priceSliderValue, 24, 17, firstPaymentSliderValue) }</td>
            </tr>
            <tr>
              <td>3 года</td>
              <td>{ calculatePLT(priceSliderValue, 36, 17, firstPaymentSliderValue) }</td>
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
}

Calculator.defaultProps = {
  maxPriceInput: 40000,
  minPriceInput: 5000,
  stepPriceInput: 500,
  maxFirstPaymentInput: 40,
  minFirstPaymentInput: 20,
  stepFirstPaymentInput: 5
};

export {
  Calculator
}
