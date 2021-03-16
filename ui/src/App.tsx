import React from 'react';
import './App.scss';
import { Main } from './pages/main/Main';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HeaderComponent } from './pages/header/Header';
import { LegalPerson } from './pages/legalPerson/LegalPerson';
import { Individual } from './pages/individual/Individual';
import { Catalog } from './pages/catalog/Catalog';
import { About } from './pages/about/About';
import { ContactsPage } from './pages/contactsPage/ContactsPage';


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

const getCars = async () => {
  const response = await fetch(API_URL);
  const data: GetVehicle[] = await response.json();
  return data;
}

const getCurrency = async () => {
  const response = await fetch('https://www.nbrb.by/api/exrates/rates/usd?parammode=2');
  const data: any = await response.json();
  return data;
}

class App extends React.Component {
  state!: { cars: GetVehicle[], cur: number };
  constructor(props: any) {
    super(props);
    this.state = { cars: [], cur: 2.5 };
  }

  async componentDidMount() {
    await getCars()
      .then((d) => {
        this.setState({
          cars: d
        });
      })
      await getCurrency()
        .then((cur) => {
          this.setState({
            cur: cur.Cur_OfficialRate
          });
        })
  }

  render() {
    return (
      <div className={"layout layout_type_index"}>
        <BrowserRouter>
        <HeaderComponent></HeaderComponent>

          <Switch>
            <Route path='/' exact component={() => <Main cars={this.state.cars} cur={this.state.cur} />} />

            <Route path='/legal' exact component={LegalPerson} />
            <Route path='/individual' exact component={Individual} />
            <Route path='/catalog' exact component={() => <Catalog cars={this.state.cars} cur={this.state.cur} />} />
            <Route path='/about' exact component={About} />
            <Route path='/contacts' exact component={ContactsPage} />

            <Route path='/' render={() => <div>404</div>} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
