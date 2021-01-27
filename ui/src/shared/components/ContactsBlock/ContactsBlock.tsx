import React from "react"

import './ContactsBlock.scss'


const ContactsBlock: React.FC = () => {
  return <div className="wrapper-contacts">
    <div className="half map">
      {/* <script type="text/javascript" charSet="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Af9d9c725f389933c43b66ddab91b66081682ae91080fa1535ea0104747cb153a&amp;width=100%25&amp;height=650&amp;lang=en_FR&amp;scroll=true"></script> */}
    </div>
    <div className="half content">
      <h2>Контакты</h2>
      <div className="content-city">
        <span>Минск</span>
      </div>
      <div className="content-contacts">
        <ul>
          <li>ул. Притыцкого, д. 156, БЦ Green City, 12-й этаж</li>
          <li>+375 (44) 766-60-01</li>
          <li>zakaz@alizing.by</li>
        </ul>
      </div>
    </div>
    {/* </div> */}
  </div>
}

export {
  ContactsBlock
}
