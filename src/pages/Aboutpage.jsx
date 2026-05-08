import React from 'react';
import Header from '../camponents/Header.jsx';
import Abt from '../camponents/Abt.jsx';
import Services from '../camponents/Services.jsx';
import Team from '../camponents/Team.jsx';
import About from  '../camponents/About.jsx';
import Footer from '../camponents/Footer.jsx';
import FloatingContact from '../camponents/FloatingContact.jsx';
import { div, section } from 'framer-motion/client';
import AboutContent from '../camponents/Abt.jsx';

function Aboutpage() {
    return (
      <section className='overflow-x-hidden'>
        <Header/>
        <Abt/>
        <Services/>
        <Team/>
        <About/>
        <Footer/>
        <FloatingContact/>
      </section>
    );
}

export default Aboutpage;