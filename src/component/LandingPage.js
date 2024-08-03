import React from 'react';
import Navbar from './NavBar';
import AboutMe from './AboutMe';
import Services from './Services';
import ContactMe from './ContactMe';
import Footer from './Footer';
import Testimonials from './Testimonials';
import Resources from './Resources';
import FooterText from './FooterText';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <AboutMe />

      <Services />

      <Resources />
      <ContactMe />
      <Footer />
      <FooterText/>
    </>
  );
};

export default LandingPage;
