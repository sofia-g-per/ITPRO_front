import { useState } from 'react'
import OrderForm from '../components/OrderForm';
import '../css/contact-us.css'

function ContactUs({portfolio}) {
    // технологии должны выводится из api
    return(
        <section className="split-middle-flex contact-us">
            <div className='contact-us__text-container align-last-to-bottom'>
                <h2 className='secondary-heading'>Вместе, мы сможем превратить идею в реальность!</h2>
                <a href="mailto:info@itpro.moscow">info@itpro.moscow</a>
            </div>
            <OrderForm 
                portfolio={portfolio}
                containerClass='contact-us__form'
                buttonClass='basic-button--purple'
            ></OrderForm>
        </section>
    );
}

export default ContactUs;