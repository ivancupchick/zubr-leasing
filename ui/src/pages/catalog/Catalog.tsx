import React from "react";
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

const Catalog: React.FC<Props> = ({ cars, cur }) => {

  return <section className="catalog-page">
    <div className="catalog-page-search">
      {/* <div className="catalog-page-search-sort">

      </div> */}
    </div>
    <div className="catalog-page-cars">
      { cars.filter(c => c.post_title !== 'Черновик').map(c => {
        const url = `http://izy.by/inventory/${c.post_name}`

        return <div className="catalog-page-cars-item">
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
            <span className="catalog-page-cars-item-description-price usd">
              { c.price } USD
            </span>
            <span className="catalog-page-cars-item-description-price">
              { (Number(c.price || 0) * cur).toFixed(2) } BYN
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
