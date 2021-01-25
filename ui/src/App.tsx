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

const App: React.FC = () => {
  return (
    <div className={"layout layout_type_index"}>
      <HeaderComponent></HeaderComponent>

      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/legal' exact component={LegalPerson} />
          <Route path='/individual' exact component={Individual} />
          <Route path='/catalog' exact component={Catalog} />
          <Route path='/about' exact component={About} />
          <Route path='/contacts' exact component={ContactsPage} />

          <Route path='/' render={() => <div>404</div>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
