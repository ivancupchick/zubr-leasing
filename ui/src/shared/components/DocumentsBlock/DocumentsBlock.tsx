import React from "react"

import docIcon from './doc-icon.png'

import './DocumentsBlock.scss'

export interface DocumentsBlockProps {
  uploadDocsUrl: string;
  uploadDocsUrlSize: string;
  buttonIsNotExist?: boolean;
}

const DocumentsBlock = (props: DocumentsBlockProps) => {
  return <section className="layout-section layout-section_documents">
    <div className="layout-holder">
      <div className="layout-heading">
        <h2 className="layout-title">Документы</h2>
        <span className="layout-section_documents_span"></span>
      </div>
      <div className="docs-message">
        <p>
          Для оформления автомобиля в финансовый лизинг от вас потребуется ряд
          документов.
          <br />
          <br />
          Список всех необходимых документов находится в файле для
          скачивания.
          <br />
          <br />
          По всем возникающим вопросам всегда можно обратиться к нашим
          специалистам по указанным номерам телефонов или отправив заявку на
          консультацию.
        </p>
        <br />
        { () => {
          // if (props.buttonIsNotExist) {
            return <></>
          // }
          // else {
          //   return <>
          //     <div className="button-block">
          //       <h3>Общие условия договора финансовой аренды</h3>
          //     </div>
          //     <div className="button-wrapper">
          //       <a href="/" className="button-wrapper-btn">Смотреть</a>
          //     </div>
          //   </>
          // }
        } }
      </div>

      <div className="docs-holder">
        <a
          className="docs-holder-link"
          href={props.uploadDocsUrl}
        >
          <img src={docIcon} alt="Скачать пакет документов" className="docs-holder-link-img"/>
          <span className="docs-holder-link-anchor">Скачать пакет документов</span>
        </a>

        <span className="docs-holder-size">
          {props.uploadDocsUrlSize}
        </span>
      </div>
    </div>
  </section>
}



export {
  DocumentsBlock
}
