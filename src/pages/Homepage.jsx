import React from 'react';
import Header from '../camponents/Header.jsx';
import Hero from '../camponents/Hero.jsx';
import Data from '../camponents/Data.jsx';
import Testi from '../camponents/Testi.jsx';
import About from '../camponents/About.jsx';
import Project from '../camponents/Project.jsx';
import Contact from '../camponents/Contact.jsx';
import Services from '../camponents/Services.jsx';
import Footer from '../camponents/Footer.jsx';
import FloatingContact from '../camponents/FloatingContact.jsx';
import Testimonials from '../camponents/Testi.jsx';

  function Homepage() {
    return (
      <section className='overflow-x-hidden'>
        <Header/>
        <Hero/>
        <Data/>
        <Testi/>
        <Footer/>
        <FloatingContact/>
      </section>
    );
}

export default Homepage;