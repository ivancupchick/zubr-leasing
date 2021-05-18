import React from "react";
import { CommonCarouselMenu } from "../../shared/components/CommonCarouselMenu/CommonCarouselMenu";

import "./Individual.scss";
import { Footer } from "../footer/Footer";
import { LeasingDescription, LeasingDescriptionProps } from "../../shared/components/LeasingDescription/LeasingDescription";
import { DocumentsBlock } from "../../shared/components/DocumentsBlock/DocumentsBlock";
import individualPackage from '../../shared/docs/individual-package.docx';
import { Calculator } from "../../shared/components/Calculator/Calculator";

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
        <Calculator></Calculator>
      </section>

      <DocumentsBlock buttonIsNotExist={true} uploadDocsUrl={individualPackage} uploadDocsUrlSize="40 Кб"></DocumentsBlock>
      <Footer></Footer>
    </div>
  );
};

export { Individual };
