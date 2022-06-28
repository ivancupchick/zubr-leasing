import React from "react"
// import { YMaps, Map } from "react-yandex-maps"

import './ContactsBlock.scss'


class ContactsBlock extends React.Component  {
  ref = React.createRef<HTMLDivElement>();

  height: string = '200px';
  width: string = '200px';

  componentDidMount() {
    if (this.ref && this.ref.current) {
      const sizes = this.ref.current.getBoundingClientRect();
      this.height = `${sizes.height}px`;
      this.width = `${sizes.width}px`;
      console.log(1);
    }
  }

  render () {
    return <div className="wrapper-contacts">
      <div ref={this.ref} className="half map">
        {/* <YMaps>
          <div>
            <Map height={this.height} width={this.width} defaultState={{ center: [55.75, 37.57], zoom: 9,  }} />
          </div>
        </YMaps> */}
        <iframe title="Карта" src="https://yandex.ru/map-widget/v1/?um=constructor%3A70f915f133548a33001f90fc181b6e20de03762237fedaa3e37e275e00f85754&amp;source=constructor" width="100%" height="100%"></iframe>
        {/* <script type="text/javascript" charSet="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Af9d9c725f389933c43b66ddab91b66081682ae91080fa1535ea0104747cb153a&amp;width=100%25&amp;height=650&amp;lang=en_FR&amp;scroll=true"></script> */}
      </div>
      <div className="half content">
        <h2>Контакты</h2>
        <div className="content-city">
          <span>Минск</span>
        </div>
        <div className="content-contacts">
          <ul>
            <li>220080, г. Минск, ул. МКАД, д. 303, пом. 02П-Ж</li>
            <li><a href="tel:37544703-74-86">+375 (44) 703-74-86</a></li>
            <li>info@zubr-leasing.by</li>
          </ul>
        </div>
      </div>
      {/* </div> */}
    </div>
  }
}

export {
  ContactsBlock
}
