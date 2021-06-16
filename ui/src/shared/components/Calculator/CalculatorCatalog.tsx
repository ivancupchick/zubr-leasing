import React, { useEffect, useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { CustomSlider } from "../CustomSlider/CustomSlider";

import './Calculator.scss';
// import { calculatePLT } from "./funcs";

export interface LeasingDescriptionProps {
  maxPriceInput?: number;
  minPriceInput?: number;
  stepPriceInput?: number;

  maxFirstPaymentInput?: number;
  minFirstPaymentInput?: number;
  stepFirstPaymentInput?: number;

  onChangePeriodAndFirstPayment?: (period: number, firstPayment: number) => void;
}

// price its period

const CalculatorCatalog: React.FC<LeasingDescriptionProps> = (props: LeasingDescriptionProps) => {
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

  useEffect(() => {
    if (props.onChangePeriodAndFirstPayment) {
      props.onChangePeriodAndFirstPayment(priceSliderValue, firstPaymentSliderValue)
    }
  });

  return <div className="calculateSection-container">
    <h2 style={{
      marginBottom: '20px'
    }}>Калькулятор лизинга</h2>
    <div className="calculateSection-container-slides">
      <div className="calculateSection-container-slides-price">
        <div className="calculateSection-container-slides-price-field">
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-price">Срок лизинга</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="price"
              aria-describedby="inputGroup-sizing-price"
              value={priceInputValue}
              onChange={onChangePriceInputValue}
              onBlur={onBlurPriceInputValue}
            />
            <InputGroup.Append>
              <InputGroup.Text>Месяцев</InputGroup.Text>
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
        <ul>
          <li>В расчёт не включено страхование на условиях полного КАСКО</li>
          <li>Все расчёты являются справочными и не являются публичной офертой</li>
        </ul>
      </div>
    </div>

    {/* calculatePLT(priceSliderValue, 60, 25, firstPaymentSliderValue) */}
  </div>
}

CalculatorCatalog.defaultProps = {
  maxPriceInput: 60,
  minPriceInput: 12,
  stepPriceInput: 12,
  maxFirstPaymentInput: 40,
  minFirstPaymentInput: 20,
  stepFirstPaymentInput: 5,

  onChangePeriodAndFirstPayment: undefined
};

export {
  CalculatorCatalog
}
