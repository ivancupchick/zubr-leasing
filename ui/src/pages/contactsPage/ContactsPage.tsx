import React from "react"
import { ContactsBlock } from "../../shared/components/ContactsBlock/ContactsBlock"
import { Footer } from "../footer/Footer"

import './ContactsPage.scss'

const ContactsPage: React.FC = () => {
  return <section className="contacts-page">
    <ContactsBlock></ContactsBlock>
    <Footer></Footer>
  </section>
}

export {
  ContactsPage
}
