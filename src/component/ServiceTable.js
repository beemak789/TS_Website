import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import { createTheme, ThemeProvider } from '@mui/material';
import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';

const theme = createTheme({
  typography: {
    fontFamily: 'Solway',
  },
  table: {
    fontSize: 28,
  },
});

const ServiceTable = () => {
  const areasOfExpertise1 = [
    'Early Intervention Play Groups',
    'Parent Coaching',
    'Speech Sound Disorders - Articulation, Phonological',
    'Childhood Apraxia of Speech',
    'Receptive Language Disorders',
  ];

  const areasOfExpertise2 = [
    'Expressive Language Disorders',
    'Fluency/Stuttering',
    'Language Delays',
    'Teletherapy',
    'Neurodiversity Affirming Social Groups',
  ];

  return (
    <>
      <ThemeProvider theme={theme}>
        <TableParent>
          <TableContainer>
            <TableTitle background='#01b8d8' fontSize='22px' color='white'>
              Areas of Expertise
            </TableTitle>

            <ExpertiseContainer>
              <div>
                {areasOfExpertise1.map((area, idx) => {
                  return (
                    <div
                      className='area'
                      key={idx}
                      style={{ fontWeight: '100', fontSize: 20 }}
                    >
                      <img src='./star.png' height={20} width={20} alt='star' />
                      <p>{area}</p>
                    </div>
                  );
                })}
              </div>

              <div>
                {areasOfExpertise2.map((area, idx) => {
                  return (
                    <div
                      className='area'
                      key={idx}
                      style={{ fontWeight: '100', fontSize: 20 }}
                    >
                      <img src='./star.png' height={18} width={18} alt='star' />
                      <p>{area}</p>
                    </div>
                  );
                })}
              </div>
            </ExpertiseContainer>

            <TableTitle background='#01b8d8' fontSize='22px' color='white'>
              Payment
            </TableTitle>

            <PaymentContainer>
              Teaching SLP operates as a private pay practice. We require full
              payment at the time of service and do not accept insurance,
              classifying us as an “out-of-network” provider. However, upon
              request, we can provide a superbill for you to seek reimbursement
              from your insurance provider. Feel free to call us today to
              discuss key questions to ask your insurance provider about
              out-of-network services.
            </PaymentContainer>

            <TableTitle background='#01b8d8' fontSize='22px' color='white'>
              Location
            </TableTitle>
            <LocationContainer>
              <div className='location-bullet'>
                <img src='/check.png' height={18} width={18} alt='check' />{' '}
                Mobile Therapist serving Medina, OH and surrounding areas{' '}
              </div>

              <div className='location-bullet'>
                <img src='/check.png' height={18} width={18} alt='check' />{' '}
                Individualized Treatment and Evaluation
              </div>

              <div className='location-bullet'>
                <img src='/check.png' height={18} width={18} alt='check' />{' '}
                Availability - Weekdays and Weekends
              </div>
            </LocationContainer>
          </TableContainer>
        </TableParent>
      </ThemeProvider>
    </>
  );
};

export default ServiceTable;

const TableParent = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  border-radius: 5px;
  width: 95%;
  margin: auto;
  justify-content: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

const PaymentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  font-weight: 100;
  gap: 2rem;
  margin: 2rem;
`;

const LocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  font-weight: 100;
  gap: 2rem;
  margin: 2rem;

  .location-bullet {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    text-align: start;
  }
`;

const ExpertiseContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 6rem;

  .area {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0rem;
    padding: 1rem;
  }
`;

const TableTitle = styled.p`
  font-size: ${(props) => props.fontSize};
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  text-align: center;
  margin: auto;
  padding: 1rem;
`;

const StyledAccordion = styled(Accordion)`
  @media (min-width: 375px) and (max-width: 768px) {
    padding: 1rem;
  }

  .request-eval-container {
    display: flex;
    justify-content: center;
    text-align: center;

    .button {
      height: 3rem;
      width: 15rem;
      font-size: 18px;
      font-family: 'Solway' !important;
      cursor: pointer;
      background-color: #008080;
      border-radius: 4px;
      color: white;
      margin-bottom: 1rem;
      border: none;
    }

    .button:hover {
      background-color: #00a2a2;
    }
  }
`;

const EvaluationProcessContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  p {
    text-align: center;
    font-size: 18px;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    .arrow-right {
      transform: rotate(90deg);
    }
  }
`;
