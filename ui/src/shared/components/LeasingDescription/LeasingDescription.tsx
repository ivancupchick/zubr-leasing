import React from "react"

import './LeasingDescription.scss'

export interface LeasingDescriptionProps {
  title: string;
  table: {
    columnHeaders: string[];
    columns: string[][];
  }
  isIndividual: boolean;
}

const LeasingDescription = (props: LeasingDescriptionProps) => {
  return <div className="commonContent-wrapper">
    <h3 className="table-header">{props.title}</h3>

    <div className="table-body">
      <div className="table-body-left table-body-half">
        <h4 className="table-body-half-header">
          { props.table.columnHeaders[0] }
        </h4>
        <div className="table-body-half-body">
          <ul>
            { props.table.columns[0].map((d, i) => {
              return <li key={i} dangerouslySetInnerHTML={{ __html: d } }></li>
            }) }
          </ul>
        </div>
      </div>
      <div className="table-body-right table-body-half">
        <h4 className="table-body-half-header">
          { props.table.columnHeaders[1] }
        </h4>
        <div className="table-body-half-body">
          <ul>
            { props.table.columns[1].map((d, i) => {
              return <li key={i} dangerouslySetInnerHTML={{ __html: d } }></li>
            }) }
          </ul>
        </div>
      </div>
    </div>
    {/* <br style={{ display: props.isIndividual ? 'block' : 'none'}} />
    <a style={{ display: props.isIndividual ? 'block' : 'none'}}
       href="/"
       className="commonContent-link">
      Правовая оговорка компании Активлизинг
    </a> */}
  </div>
}



export {
  LeasingDescription
}
