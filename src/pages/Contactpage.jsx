import React from 'react';
import Header from '../camponents/Header.jsx';
import ConnectSection from '../camponents/ConnectSection.jsx';
import Contact from '../camponents/Contact.jsx';
import Footer from '../camponents/Footer.jsx';
import FloatingContact from '../camponents/FloatingContact.jsx';
import { div, section } from 'framer-motion/client';

function Contactpage() {
    return (
      <section className='overflow-x-hidden'>
        <Header/>
        <ConnectSection/>
        <Contact/>
        <Footer/>
        <FloatingContact/>
      </section>
    );
}

export default Contactpage;