import React from 'react';
import Form from './Form';
import styled from 'styled-components';
import { createTheme, ThemeProvider } from '@mui/material';
import Divider from '@mui/material/Divider';

const theme = createTheme({
  typography: {
    fontFamily: 'Solway',
    fontWeightRegular: 100,
    fontSize: 16,
  },
});

const ContactMe = () => {
  return (
    <ThemeProvider theme={theme}>
      <ContactMeContainer name='contactUs'>
        <Divider
          style={{
            color: '#01b8d8',
            fontWeight: '200',
            fontSize: '34px',
            width: '100%',
          }}
        >
          Contact Us
        </Divider>

        <h1 style={{ color: '#000068' }}>Get in touch with us today.</h1>

        <ContactTextboxContainer>
          <GetInTouch>
            <img src='/email.png' alt='email-icon' height={50} width={50} />

            <p className='interested-in-speech'>
              Call or email today for more information.
            </p>

            <p className='interested-in-speech'>
              Free 15-minute consultation
            </p>

            <ContactDetailsContainer>
              <NumberEmailContainer>
                <div className='info'>
                  <img src='/phone.png' height={28} width={28} alt='' />
                  <p style={{ color: '#01b8d8' }}>(330)-757-1302</p>
                </div>
                <div className='info email'>
                  <img src='/mail.png' height={28} width={28} alt='' />
                  <p style={{ color: '#01b8d8' }}>hello@teachingslp.com</p>
                </div>
              </NumberEmailContainer>
            </ContactDetailsContainer>
          </GetInTouch>

          <Form />
        </ContactTextboxContainer>
      </ContactMeContainer>
    </ThemeProvider>
  );
};

export default ContactMe;

const ContactMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;

  h1 {
    font-weight: 100;
    text-align: center;
    @media (min-width: 375px) and (max-width: 768px) {
      padding: 2rem;
    }
  }
`;

const ContactTextboxContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  justify-content: space-between;

  @media (min-width: 375px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const NumberEmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 28px;

  .info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-align: center;
  }

  .info.email {
    color: #01b8d8 !important;
    @media (min-width: 375px) and (max-width: 768px) {
      font-size: 13px;
    }
  }

  @media (min-width: 375px) and (max-width: 768px) {
    width: 100%;
  }
`;

const ContactDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  font-size: 18px;
  width: 100%;
`;

const GetInTouch = styled.div`
  text-align: center;
  font-size: 26px;
  width: 50%;
  margin-top: 2rem;

  p {
    color: #008080;
  }

  .interested-in-speech {
    padding: 1rem;
    color: #01b8d8;
    font-weight: 700;

    @media (min-width: 375px) and (max-width: 768px) {
      font-size: 18px;
    }
  }

  @media (min-width: 375px) and (max-width: 768px) {
    font-size: 14px;
    width: 90%;
    margin: auto;
  }
`;

const AddressContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;

  .address {
    line-height: 3pt;
    text-align: start;
    font-size: 18px;
    @media (min-width: 375px) and (max-width: 768px) {
      font-size: 15px;
    }
  }
`;
