import React from 'react'

import DevWithArVr from '../components/DevWithArVr.jsx';
import StagesOfDevScroll from '../components/StagesOfDevScroll.jsx';
import OurCustomers from '../components/OurCustomers.jsx';
import LogoSection from '../components/LogoSection.jsx';
import StagesOfDevelopment from '../components/StagesOfDevelopment.jsx';

export default function AboutUs() {
  return (
    <section className="">
      <DevWithArVr></DevWithArVr>
      <OurCustomers></OurCustomers>
      <LogoSection></LogoSection>
      <StagesOfDevScroll></StagesOfDevScroll>
      <StagesOfDevelopment></StagesOfDevelopment>
    </section>
  )
}
