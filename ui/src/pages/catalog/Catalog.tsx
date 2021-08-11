import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { CalculatorCatalog } from "../../shared/components/Calculator/CalculatorCatalog";
import { calculatePLT } from "../../shared/components/Calculator/funcs";
import { Footer } from "../footer/Footer";
import "./Catalog.scss";

export const REACT_APP_API_URL = "http://zubr-leasing.by/api/";
export const REACT_APP_API_URL_prod = "./api/";
export const API_URL = process.env.NODE_ENV === "development" ? REACT_APP_API_URL : REACT_APP_API_URL_prod;

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

type Models = {
  [key: string]: string[];
}

const Catalog: React.FC<Props> = ({ cars, cur }) => {
  let sortedCars = [...cars];
  let marks: string[] = [];
  let models: Models = {};
  let bodyTypes: string[] = [];
  let wheelDrives: string[] = [];
  let petrols: string[] = [];
  let transmissions: string[] = [];
  let years: string[] = [];
  let capacities: string[] = [];

  cars.forEach((value, index) => {
    const mark = value.post_title?.split(' ')[0];
    const model = value.post_title?.split(' ')[1];
    const bodyType = value.bodyType;
    const wheelDrive = value.wheelDrive;
    const petrol = value.petrol;
    const transmission = value.transmission;
    const year = value.year;
    const capacity = value.engineCapacity;

    if (mark && !marks.find(m => m === mark)) {
      marks.push(mark);
      models[mark] = [];
    }

    if (mark && model && !models[mark].find(m => m === model)) {
      models[mark].push(model);
    }

    const addStructure = (structure: string | undefined, arrStructure: string[]) => {
      if (structure && !arrStructure.find(m => m === structure)) {
        arrStructure.push(structure);
      }
    }

    addStructure(bodyType, bodyTypes);
    addStructure(wheelDrive, wheelDrives);
    addStructure(petrol, petrols);
    addStructure(transmission, transmissions);
    addStructure(year, years);
    addStructure(capacity, capacities);

  })

  const [selectedMark, selectMark] = useState('any');
  const [selectedModel, selectModel] = useState('any');
  const onChangeMark = (v: string) => {
    selectMark(v);
    selectModel('any');
  }
  const [selectedBodyType, selectBodyType] = useState('any');
  const [selectedWheelDrive, selectWheelDrive] = useState('any');
  const [selectedPetrol, selectPetrol] = useState('any');
  const [selectedTransmission, selectTransmission] = useState('any');
  const [selectedMinYear, selectMinYear] = useState('any');
  const [selectedMaxYear, selectMaxYear] = useState('any');

  const [selectedMinCapacity, selectMinCapacity] = useState('any');
  const [selectedMaxCapacity, selectMaxCapacity] = useState('any');

  const [selectedMinPrice, selectMinPrice] = useState('');
  const [selectedMaxPrice, selectMaxPrice] = useState('');
  const [selectedCurrency, selectCurrency] = useState('usd');

  // sort
  if (selectedMark !== 'any') {
    sortedCars = sortedCars.filter(c => (c.post_title?.split(' ')[0] || '') === selectedMark);

    if (selectedModel !== 'any') {
      sortedCars = sortedCars.filter(c => (c.post_title?.split(' ')[1] || '') === selectedModel);
    }
  }

  if (selectedBodyType !== 'any') {
    sortedCars = sortedCars.filter(c => c.bodyType === selectedBodyType);
  }

  if (selectedWheelDrive !== 'any') {
    sortedCars = sortedCars.filter(c => c.wheelDrive === selectedWheelDrive);
  }

  if (selectedPetrol !== 'any') {
    sortedCars = sortedCars.filter(c => c.petrol === selectedPetrol);
  }

  if (selectedTransmission !== 'any') {
    sortedCars = sortedCars.filter(c => c.transmission === selectedTransmission);
  }

  if (selectedMinPrice !== '' && selectedMinPrice !== null && selectedMinPrice !== undefined) {
    sortedCars = sortedCars
      .filter(c => selectedCurrency === 'usd'
        ? Number(c.price) >= Number(selectedMinPrice)
        : Number((Number(c.price || 0) * cur).toFixed(2)) >= Number(selectedMinPrice)
      );
  }

  if (selectedMaxPrice !== '' && selectedMaxPrice !== null && selectedMaxPrice !== undefined) {
    sortedCars = sortedCars
      .filter(c => selectedCurrency === 'usd'
        ? Number(c.price) <= Number(selectedMaxPrice)
        : Number((Number(c.price || 0) * cur).toFixed(2)) <= Number(selectedMaxPrice)
      );
  }

  // START YEARS
  years = years.sort();
  const minYear = years[0];
  const maxYear = years[years.length - 1];
  years = [];

  for (let i = 0; i < Number(maxYear); i++) {
    years[i] = `${Number(minYear) + i}`;

    if (Number(years[i]) === Number(maxYear)) {
      break;
    }
  }

  let minYears = [...years];
  let maxYears = [...years];

  if (selectedMinYear !== 'any') {
    sortedCars = sortedCars.filter(c => Number(c.year) >= Number(selectedMinYear));
    maxYears = maxYears.filter(y => Number(y) >= Number(selectedMinYear));
  }
  if (selectedMaxYear !== 'any') {
    sortedCars = sortedCars.filter(c => Number(c.year) <= Number(selectedMaxYear));
    minYears = minYears.filter(y => Number(y) <= Number(selectedMaxYear));
  }
  // END YEARS

  // START CAPACITY
  capacities = capacities.sort();
  const minCapacity = capacities[0];
  const maxCapacity = capacities[capacities.length - 1];
  capacities = [];

  for (let i = 0; Number(minCapacity) + (i * 100) < Number(maxCapacity); i++) {
    capacities[i] = `${Number(minCapacity) + (i * 100)}`;

    if (Number(capacities[i]) === Number(maxCapacity)) {
      break;
    }
  }

  let minCapacitites = [...capacities];
  let maxCapacitites = [...capacities];

  if (selectedMinCapacity !== 'any') {
    sortedCars = sortedCars.filter(c => Number(c.engineCapacity) >= Number(selectedMinCapacity));
    maxCapacitites = maxCapacitites.filter(y => Number(y) >= Number(selectedMinCapacity));
  }
  if (selectedMaxCapacity !== 'any') {
    sortedCars = sortedCars.filter(c => Number(c.engineCapacity) <= Number(selectedMaxCapacity));
    minCapacitites = minCapacitites.filter(y => Number(y) <= Number(selectedMaxCapacity));
  }
  // END CAPACITY

  const [firstPayment, setFirstPayment] = useState<number>(0);
  const [period, setPeriod] = useState<number>(0);

  const onChangePeriodAndFirstPayment = (periodValue: number, firstPaymentValue: number) => {
    setFirstPayment(firstPaymentValue);
    setPeriod(periodValue);
  }

  return <section className="catalog-page">
    <div className="catalog-page-title">
      <h3>Специальные предложения от партнёров</h3>
    </div>
    <div className="catalog-page-search">
      <div className="catalog-page-search-simple">
        <div className="catalog-page-search-simple-field">
          <Form.Row>
            <Form.Group as={Col} controlId="a1">
              <Form.Label>Марка</Form.Label>
              <Form.Control
                value={selectedMark}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { onChangeMark(e.target.value || '') }}
                as="select"
              >
                <option value="any">Все марки</option>
                { marks.map(m =>  <option key={m} value={m}>{m}</option>) }
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="a2">
              <Form.Label>Модель</Form.Label>
              <Form.Control
                disabled={selectedMark === 'any'}
                value={selectedModel}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { selectModel(e.target.value || '') }}
                as="select"
              >
                <option value="any">Все модели</option>
                {
                  selectedMark !== 'any' ? models[selectedMark].map(m =>  <option key={m} value={m}>{m}</option>) : null
                }
              </Form.Control>
            </Form.Group>
          </Form.Row>
        </div>
        <div className="catalog-page-search-simple-field">
          <Form>
            <Row>
              <Col>
                <Form.Row>
                  <Form.Group as={Col} controlId="b1">
                    <Form.Label>Год от</Form.Label>
                    <Form.Control
                      value={selectedMinYear}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { selectMinYear(e.target.value || '') }}
                      as="select"
                    >
                      <option value="any">От</option>
                      { minYears.map(m => <option key={m} value={m}>{m}</option>) }
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="n2">
                    <Form.Label>Год до</Form.Label>
                    <Form.Control
                      value={selectedMaxYear}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { selectMaxYear(e.target.value || '') }}
                      as="select"
                    >
                      <option value="any">До</option>
                      { maxYears.map(m =>  <option key={m} value={m}>{m}</option>) }
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
              </Col>
              <Col>
                <Form.Row>
                  <Form.Group as={Col} controlId="b3">
                    <Form.Label>Цена от</Form.Label>
                    <Form.Control
                      value={selectedMinPrice}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { selectMinPrice(e.target.value || '') }}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="b4">
                    <Form.Label>Цена до</Form.Label>
                    <Form.Control
                      value={selectedMaxPrice}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { selectMaxPrice(e.target.value || '') }}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group as={Col} style={{minWidth: '90px'}} controlId="b7" sm="2">
                    <Form.Label>Валюта</Form.Label>
                    <Form.Control
                      value={selectedCurrency}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { selectCurrency(e.target.value || '') }}
                      as="select"
                    >
                      <option value="usd">USD</option>
                      <option value="byn">BYN</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
              </Col>
              <Col>
                <Form.Row>
                  <Form.Group as={Col} controlId="b5">
                    <Form.Label>Объем от</Form.Label>
                    <Form.Control
                      value={selectedMinCapacity}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { selectMinCapacity(e.target.value || '') }}
                      as="select"
                    >
                      <option value="any">От</option>
                      { minCapacitites.map(m => <option key={m} value={m}>{m}</option>) }
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="b6">
                    <Form.Label>Объем до</Form.Label>
                    <Form.Control
                      value={selectedMaxCapacity}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { selectMaxCapacity(e.target.value || '') }}
                      as="select"
                    >
                      <option value="any">До</option>
                      { maxCapacitites.map(m => <option key={m} value={m}>{m}</option>) }
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
              </Col>
            </Row>
          </Form>
        </div>

        <div className="catalog-page-search-simple-field">
          <Form.Row>
            <Form.Group as={Col} controlId="c1">
              <Form.Label>Коробка передач</Form.Label>
              <Form.Control
                value={selectedTransmission}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { selectTransmission(e.target.value || '') }}
                as="select"
              >
                <option value="any">Любая</option>
                { transmissions.map((m, i) =>  <option key={m} value={m}>{decodeURI(m)}</option>) }
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="c2">
              <Form.Label>Кузов</Form.Label>
              <Form.Control
                value={selectedBodyType}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { selectBodyType(e.target.value || '') }}
                as="select"
              >
                <option value="any">Любая</option>
                { bodyTypes.map((m, i) =>  <option key={m} value={m}>{decodeURI(m)}</option>) }
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="c3">
              <Form.Label>Привод</Form.Label>
              <Form.Control
                value={selectedWheelDrive}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { selectWheelDrive(e.target.value || '') }}
                as="select"
              >
                <option value="any">Любой</option>
                { wheelDrives.map((m, i) =>  <option key={m} value={m}>{decodeURI(m)}</option>) }
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="c4">
              <Form.Label>Тип мотора</Form.Label>
              <Form.Control
                value={selectedPetrol}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { selectPetrol(e.target.value || '') }}
                as="select"
              >
                <option value="any">Любой</option>
                { petrols.map((m, i) =>  <option key={m} value={m}>{decodeURI(m)}</option>) }
              </Form.Control>
            </Form.Group>
          </Form.Row>
        </div>
      </div>
      {/* <div className="catalog-page-search-sort">

      </div> */}
    </div>
    <div className="catalog-page-calculator">
      <CalculatorCatalog onChangePeriodAndFirstPayment={onChangePeriodAndFirstPayment}></CalculatorCatalog>
    </div>
    <div className="catalog-page-cars">
      { sortedCars.filter(c => c.post_title !== 'Черновик').map(c => {
        const url = `http://zubr-auto.by/inventory/${c.post_name}`

        return <div key={`${c.id}`} className="catalog-page-cars-item">
          <a href={url} target="_blank" rel="noreferrer" className="catalog-page-cars-item-link">
            <img src={c.attachments ? c.attachments[0] : ''} alt="" title=""/>
          </a>
          <div className="catalog-page-cars-item-description">
            <a href={url} target="_blank" rel="noreferrer" >{c.post_title}</a>
            <ul className="catalog-page-cars-item-description-characteristics">
              <li>
                <span>Тип кузова</span>
                <span> { decodeURI(c.bodyType || '') } </span>
              </li>
              <li>
                <span>Год выпуска</span>
                <span> { c.year } </span>
              </li>
            </ul>
            <span className="catalog-page-cars-item-description-span">
              Стоимость
            </span>
            <span className="catalog-page-cars-item-description-span">
              <span className="catalog-page-cars-item-description-price usd">
                { c.price } USD
              </span>
              <span className="catalog-page-cars-item-description-price">
               = { (Number(c.price || 0) * cur).toFixed(2) } BYN
              </span>
            </span>
            <span className="catalog-page-cars-item-description-span">
              Месячный платёж
            </span>
            <span className="catalog-page-cars-item-description-span">
              <span className="catalog-page-cars-item-description-price usd">
                { calculatePLT(+(c.price || '0'), period, 25, firstPayment) } USD
              </span>
              <span className="catalog-page-cars-item-description-price">
               = { (Number(calculatePLT(+(c.price || '0'), period, 25, firstPayment) || 0) * cur).toFixed(2) } BYN
              </span>
            </span>
          </div>
        </div>
      }) }
    </div>
    <Footer></Footer>
  </section>
}

export {
  Catalog
}
