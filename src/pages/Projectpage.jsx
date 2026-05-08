import React from 'react'
import Header from '../camponents/Header.jsx';
import ProjectPageContent from '../camponents/ProjectPageContent.jsx';
import Project from '../camponents/Project.jsx';
import Footer from '../camponents/Footer.jsx';
import FloatingContact from '../camponents/FloatingContact.jsx';
function Projectpage() {
  return (
    <section>
      <Header/>
      <ProjectPageContent/>
      <Project/>
      <Footer/>
      <FloatingContact/>
    </section>
  )
}

export default Projectpage