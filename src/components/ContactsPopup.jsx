import React from 'react'
import '../css/contacts-popup.css'
import logo from "../img/Logo.svg";


export default function ContactsPopup() {
  return (
    <div className='contacts-popup__content'>
        <img className='contacts-popup__logo' src={logo} alt="Логотип ITPRO" />
        <div className="contacts-popup__mail contacts-popup__item">
            <p className='contacts-popup__mail__text'>Свяжитесь с нами</p>
            <a className='contacts-popup__mail__link' href="mailto:info@itpro.moscow">info@itpro.moscow</a>
        </div>
        <div className="contacts-popup__socials contacts-popup__item">
            <p className='contacts-popup__socials__text'>Мы в социальных сетях</p>
            <a href="mailto:info@itpro.moscow">info@itpro.moscow</a>
        </div>
    </div>
  )
}
