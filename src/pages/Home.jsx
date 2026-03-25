import React from 'react';
import Header from '../camponents/Header.jsx';
import Hero from '../camponents/Hero.jsx';
import About from '../camponents/About.jsx';
import Project from '../camponents/Project.jsx';
import Contact from '../camponents/Contact.jsx';
import Services from '../camponents/Services.jsx';
import Footer from '../camponents/Footer.jsx';
  import FloatingContact from '../camponents/FloatingContact.jsx';

  function Home() {
    return (
      <section className='overflow-x-hidden'>
        <Header/>
        <Hero/>
        <Services/>
        <About />
        <Project/>
        <Contact/>
        <Footer/>
        <FloatingContact/>
      </section>
    );
}

export default Home;