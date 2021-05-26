import React from "react"

import './LegalPerson.scss'

import { LeasingDescription, LeasingDescriptionProps } from "../../shared/components/LeasingDescription/LeasingDescription"
import { Footer } from "../footer/Footer"
import { CommonCarouselMenu } from "../../shared/components/CommonCarouselMenu/CommonCarouselMenu"
import { DocumentsBlock } from "../../shared/components/DocumentsBlock/DocumentsBlock"
import legalPackage from '../../shared/docs/legal-package.docx';

const leasingDescriptionProps: LeasingDescriptionProps = {
  title: 'ЛИЗИНГ ДЛЯ ЮРИДИЧЕСКИХ ЛИЦ И ИНДИВИДУАЛЬНЫХ ПРЕДПРИНИМАТЕЛЕЙ',
  table: {
    columnHeaders: [
      'Преимущества лизинга в "ЗУБР ЛИЗИНГ":',
      ''
    ],
    columns: [
      [
        'Специальные программы приобретения',
        'Минимальный пакет документов',
        'Оформление в течение <b>2х</b> дней'
      ], [
        'Собственное участие от <b>20%</b> стоимости автомобиля',
        'АвтоКАСКО по минимальным тарифам и с ежемесячной оплатой.',
        'Оплата по курсу НБРБ <b>без</b> дополнительных комиссий'
      ]
    ]
  },
  isIndividual: false
}

const LegalPerson: React.FC = () => {
  return <div className="wrapper">
      <CommonCarouselMenu url="legal"></CommonCarouselMenu>
      <section className="commonContent">
        <LeasingDescription {...leasingDescriptionProps}></LeasingDescription>
      </section>
      <DocumentsBlock buttonIsNotExist={false} uploadDocsUrl={legalPackage} uploadDocsUrlSize="53 Кб"></DocumentsBlock>
      <Footer></Footer>
    </div>
}

export {
  LegalPerson
}
