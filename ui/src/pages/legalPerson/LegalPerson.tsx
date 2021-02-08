import React from "react"

import './LegalPerson.scss'

import { LeasingDescription, LeasingDescriptionProps } from "../../shared/components/LeasingDescription/LeasingDescription"
import { Footer } from "../footer/Footer"
import { CommonCarouselMenu } from "../../shared/components/CommonCarouselMenu.tsx/CommonCarouselMenu"
import { DocumentsBlock } from "../../shared/components/DocumentsBlock/DocumentsBlock"

const leasingDescriptionProps: LeasingDescriptionProps = {
  title: 'ЛИЗИНГ ДЛЯ ЮРИДИЧЕСКИХ ЛИЦ И ИНДИВИДУАЛЬНЫХ ПРЕДПРИНИМАТЕЛЕЙ',
  table: {
    columnHeaders: [
      'Преимущества лизинга в "ЗУБР ЛИЗИНГ":',
      ''
    ],
    columns: [
      [
        'Специальные программы приобретения с автодилерами',
        'Минимальный пакет документов для оформления - от <b>4х</b> документов',
        'Оформление в течение <b>2х</b> дней'
      ], [
        'Минимальная предоплата - собственное участие от <b>10%</b> стоимости автомобиля',
        'АвтоКАСКО по минимальным тарифам и с ежемесячной оплатой.',
        'Оплата по курсу НБРБ <b>без</b> дополнительных комиссий'
      ]
    ]
  },
  isIndividual: false
}

const LegalPerson: React.FC = () => {
  return <div className="wrapper">
      <CommonCarouselMenu url="legalPerson"></CommonCarouselMenu>
      <section className="commonContent">
        <LeasingDescription {...leasingDescriptionProps}></LeasingDescription>
      </section>
      <DocumentsBlock uploadDocsUrl="/" uploadDocsUrlSize="240.86 Кб"></DocumentsBlock>
      <Footer></Footer>
    </div>
}

export {
  LegalPerson
}
