import React from 'react';
import Form from './Form';
import styled from 'styled-components';
import { createTheme, ThemeProvider } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Icon } from '@iconify/react';

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
            fontWeight: '300',
            fontSize: '34px',
            width: '100%',
          }}
        >
          Contact Us
        </Divider>

        <ConsultContactMeContainer>
          <ContactTextboxContainer>
            <Form />
          </ContactTextboxContainer>

          <FreeConsultContainer>
            <p className='consult-text'>
              <h1>Free Consultation</h1>
              We provide complimentary 15-minute phone consultations for new
              clients. During this call, you can share details about your child,
              ask questions regarding their speech, language, or learning
              development, and discuss scheduling an initial appointment.
            </p>
            <Divider />

            <ContactDetailsContainer>
              <NumberEmailContainer>
                <h3>Contact Information</h3>
                <a
                  className='instagram-icon'
                  href='https://www.instagram.com/teachingslp?igsh=ZXp2bnp0bGlyZGlz'
                >
                  {' '}
                  <Icon icon='skill-icons:instagram' target='_blank' />
                  <p>Instagram</p>
                </a>

                <div className='info'>
                  <img src='/phone.png' height={20} width={20} alt='' />
                  <p style={{ color: '#01b8d8' }}>(330)-757-1302</p>
                </div>
                <div className='info email'>
                  <img src='/mail.png' height={28} width={28} alt='' />
                  <p style={{ color: '#01b8d8' }}>hello@teachingslp.com</p>
                </div>
              </NumberEmailContainer>
            </ContactDetailsContainer>
          </FreeConsultContainer>
        </ConsultContactMeContainer>
      </ContactMeContainer>
    </ThemeProvider>
  );
};

export default ContactMe;

const ConsultContactMeContainer = styled.div`
  display: flex;
  gap: 3rem;
  width: 100%;

  @media (min-width: 375px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const ContactMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  padding: 2rem;

  h1 {
    font-weight: 100;
    text-align: center;
    @media (min-width: 375px) and (max-width: 768px) {
      padding: 2rem;
      display: flex;
      flex-direction: column;
    }
  }
`;

const FreeConsultContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  text-align: center;
  width: 40%;

  .consult-text {
    color: #0e0e55;
    padding: 5rem;

    @media (min-width: 375px) and (max-width: 768px) {
      margin-top: 0;
      padding: 2rem;
    }
  }

  @media (min-width: 375px) and (max-width: 768px) {
    display: flex;
    align-items: center;
    text-align: center;
    margin: auto;
    width: 90%;
  }
`;

const ContactTextboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  padding: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  margin-top: 7rem;

  @media (min-width: 375px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  }
`;

const NumberEmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 18px;

  .instagram-icon {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #01b8d8;
  }

  .info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-align: center;
  }

  .info.email {
    color: #01b8d8 !important;
    @media (min-width: 375px) and (max-width: 768px) {
      font-size: 18px;
    }
  }

  @media (min-width: 375px) and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const ContactDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 1rem;
  font-size: 18px;
  width: 100%;
  color: #0e0e55;
`;
