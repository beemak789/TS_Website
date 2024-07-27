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
            color: '#008080',
            fontWeight: '100',
            fontSize: '32px',
            width: '100%',
          }}
        >
          Contact Us
        </Divider>

        <h1>Get in touch with us today.</h1>

        <ContactTextboxContainer>
          <GetInTouch>
            <img src='/email.png' alt='email-icon' height={50} width={50} />

            <p className='interested-in-speech'>
              Interested in speech therapy? Contact us to learn about the
              services we provide and have any questions answered.
            </p>

            <ContactDetailsContainer>
              <NumberEmailContainer>
                <div className='info'>
                  <img src='/phone.png' height={28} width={28} alt='' />
                  <p>(937)-369-6613</p>
                </div>
                <div className='info email'>
                  <img src='/mail.png' height={28} width={28} alt='' />
                  <p>amye@fullbloomspeechlanguagepathology.com</p>
                </div>
              </NumberEmailContainer>
              <AddressContainer>
                <a href='https://www.google.com/maps/place/17111+Kenton+Dr+%23206b,+Cornelius,+NC+28031/@35.4492384,-80.8899337,17z/data=!3m1!4b1!4m5!3m4!1s0x8856a92fb6b4db01:0x80234f9b85d475a4!8m2!3d35.4492384!4d-80.8899337?entry=ttu' target='_blank' rel="noreferrer">
                  {' '}
                  <img src='/map.png' height={28} width={28} alt=''/>
                </a>

                <div className='address'>
                  <p>Kenton Place</p>
                  <p>17111 Kenton Drive Suite 206B</p>
                  <p>Cornelius, NC 28031</p>
                </div>
              </AddressContainer>
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

  .info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-align: center;
  }

  .info.email {
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
  font-size: 18px;
  width: 50%;
  margin: auto;
  margin-top: 2rem;

  p {
    color: #008080;
  }

  .interested-in-speech {
    padding: 1.5rem;

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
