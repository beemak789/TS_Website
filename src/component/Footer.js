import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { Link } from 'react-scroll';
import DesignedByContainer from './DesignedByContainer';

const Footer = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
    <FooterContainer>
      <FooterContent>
        <div className='logo-socials'>
          <Button
            onClick={handleCloseNavMenu}
            disableRipple={true}
            style={{ backgroundColor: 'transparent' }}
            alt="icon-logo"
          >
            <Link spy={true} smooth={true} duration={500} to='nav'>
              <LogoImage
                className='nav-leaf-icon'
                src='/white-slp-logo.png'
                alt='leafIcon logo'
                width={270}
                height={200}
              ></LogoImage>
            </Link>
          </Button>
        </div>

        <QuickLinksContainer>
          <h3>Quick Links</h3>

          <Link
            className='link'
            spy={true}
            smooth={true}
            duration={500}
            to='aboutUs'
          >
            <p>About Us</p>
          </Link>

          <Link
            className='link'
            spy={true}
            smooth={true}
            duration={500}
            to='services'
          >
            <p>Services</p>
          </Link>

          <Link
            className='link'
            spy={true}
            smooth={true}
            duration={500}
            to='resources'
          >
            <p>Resources</p>
          </Link>

          <Link
            className='link'
            spy={true}
            smooth={true}
            duration={500}
            to='contactUs'
          >
            <p>Contact</p>
          </Link>
        </QuickLinksContainer>
      </FooterContent>
    </FooterContainer>
    <DesignedByContainer />
    </>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  color: black;
  display: flex;
  flex-direction: column;
  background: white;
  text-align: center;
  padding: 8px;
`;

const FooterContent = styled.div`
  display: flex;
  color: #008080;
  width: 100%;
  margin: auto;
  justify-content: space-around;

  .logo-socials {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    display: none;
  }
`;

const LogoImage = styled.img`
  margin-left: 2rem;
  margin-top: 3rem;
`;

const QuickLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1pt;
  color: #01b8d8;
  margin-top: 3rem;
  margin-bottom: -2rem;
  font-size: 18px;

  .link:hover {
    cursor: pointer;
    color: #FED32C;
  }
`;

