import React from "react";
import { CommonCarouselMenu } from "../../shared/components/CommonCarouselMenu.tsx/CommonCarouselMenu";

import "./Individual.scss";
import { Footer } from "../footer/Footer";
import { LeasingDescription, LeasingDescriptionProps } from "../../shared/components/LeasingDescription/LeasingDescription";
import { DocumentsBlock } from "../../shared/components/DocumentsBlock/DocumentsBlock";

const leasingDescriptionProps: LeasingDescriptionProps = {
  title: 'Лизинг для физических лиц',
  table: {
    columnHeaders: [
      'Преимущества лизинга:',
      'Условия лизинга:'
    ],
    columns: [
      [
        'Специальные программы &nbsp;с автодилерами',
        'Услуга Trade-in - Ваш авто вместо аванса',
        'Без справки о доходах',
        'Платежи через ЕРИП без дополнительных комиссий',
        'Оформление за 2 дня'
      ], [
        'Легковые автомобили новые и б/у до 10 лет',
        'Собственное участие от 20%',
        'Срок лизинга до 84 месяцев',
        'Валюты договора: BYN, USD, EUR',
        'Возраст: от 21 до 65 лет',
        'Гражданство РБ или вид на жительство'
      ]
    ]
  },
  isIndividual: true
}

const Individual: React.FC = () => {
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

      <DocumentsBlock uploadDocsUrl="/" uploadDocsUrlSize="67.49 Кб"></DocumentsBlock>
      <Footer></Footer>
    </div>
  );
};

export { Individual };
