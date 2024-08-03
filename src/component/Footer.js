import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { Link } from 'react-scroll';

const Footer = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <FooterContainer>
      <FooterContent>
        <div className='logo-socials'>
          <Button
            onClick={handleCloseNavMenu}
            disableRipple={true}
            style={{ backgroundColor: 'transparent' }}
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
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const LogoImage = styled.img`
  margin-left: 2rem;
  margin-top: 3rem;

  @media (min-width: 375px) and (max-width: 768px) {
    display: none;
  }
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
    color: #ffd937;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    display: none;
  }
`;

const IconContainers = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
`;

const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 2rem;
  font-size: 20px;
  margin: 1rem;
  color: #01b8d8;

  @media (min-width: 375px) and (max-width: 768px) {
    display: flex;
    align-items: start;
  }

  .info,
  .address-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 18px;
    color: black;
    line-height: 2pt;
  }
`;
