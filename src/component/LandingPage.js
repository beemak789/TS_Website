import React from 'react';
import Navbar from './NavBar';
import AboutMe from './AboutMe';
import Services from './Services';
import ContactMe from './ContactMe';
import Footer from './Footer';
import Resources from './Resources';
import FooterText from './FooterText';
import styled from 'styled-components';

const LandingPage = () => {
  return (
    <MainPageContainer>
      <Navbar />
      <AboutMe />
      <Services />
      <Resources />
      <ContactMe />
      <Footer />
      <FooterText />
    </MainPageContainer>
  );
};

export default LandingPage;

const MainPageContainer = styled.div`
  max-width: 1500px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
