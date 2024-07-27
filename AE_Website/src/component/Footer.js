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
                src='/logo.jpg'
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

        <ContactInfoContainer>
          <h3>Contact Us</h3>

          <IconContainers>
            <a href='https://www.instagram.com/fullbloomslp?igsh=cDNhNncydmVpejZr'>
              {' '}
              <Icon icon='skill-icons:instagram' />
            </a>

            <a href='https://www.facebook.com/profile.php?id=61560669335136'>
              {' '}
              <FacebookIcon
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 256 256'
              >
                <path
                  fill='#1877f2'
                  d='M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445'
                ></path>
                <path
                  fill='#fff'
                  d='m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z'
                ></path>
              </FacebookIcon>
            </a>
          </IconContainers>

          <div className='address-container'>
            <a
              href='https://www.google.com/maps/place/17111+Kenton+Dr+%23206b,+Cornelius,+NC+28031/@35.4492384,-80.8899337,17z/data=!3m1!4b1!4m5!3m4!1s0x8856a92fb6b4db01:0x80234f9b85d475a4!8m2!3d35.4492384!4d-80.8899337?entry=ttu'
              target='_blank'
              rel='noreferrer'
            >
              {' '}
              <img src='/map.png' height={12} width={12} alt='' />
            </a>

            <div className='address'>
              <p>Kenton Place</p>
              <p>17111 Kenton Drive Suite 206B</p>
              <p>Cornelius, NC 28031</p>
            </div>
          </div>

          <div className='info'>
            <img src='/phone.png' height={12} width={12} alt='' />
            <p>(937)-369-6613</p>
          </div>
          <div className='info'>
            <img src='/mail.png' height={12} width={12} alt='' />
            <p>amye@fullbloomspeechlanguagepathology.com</p>
          </div>
        </ContactInfoContainer>
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
  bottom: 0px;
  text-align: center;
  margin: 0;
  padding: 10px;
  bottom: 0px;
  align-items: center;
`;

const FooterContent = styled.div`
  display: flex;
  color: #008080;
  width: 100%;
  justify-content: space-between;
  margin: auto;

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

const FacebookIcon = styled.svg`
  height: 1em;
  width: 1.2em;
  margin-top: -0.2rem;
`;

const QuickLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1pt;
  color: #8e3e63;
  margin-top: 3rem;
  margin-bottom: -2rem;

  .link:hover {
    cursor: pointer;
    color: #008080;
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
  padding: 1rem;

  @media (min-width: 375px) and (max-width: 768px) {
    display: flex;
    align-items: start;
  }

  .info,
  .address-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 14px;
    color: black;
    line-height: 2pt;
  }
`;
