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
    <table>
      <thead>
        <tr>
          { props.table.columnHeaders.map((d, i) => {
            return <th key={i} className="table-subtitle">{d}</th>
          }) }
          {/* <th className="table-subtitle">Преимущества лизинга:</th>
          <th className="table-subtitle">Условия лизинга:</th> */}
        </tr>
      </thead>
      <tbody className="">
        <tr className="table-content">
          <td width="50%" valign="top">
            {/* style="padding-right:0px; width:100%;" */}
            <ul>
              { props.table.columns[0].map((d, i) => {
                return <li key={i} dangerouslySetInnerHTML={{ __html: d } }></li>
              }) }
            </ul>
          </td>
          <td valign="top" className="table-text">
            {/* style="padding-right:0px; width:100%;" */}
            <ul>
              { props.table.columns[1].map((d, i) => {
                return <li key={i} dangerouslySetInnerHTML={{ __html: d } }></li>
              }) }
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
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
