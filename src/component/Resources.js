import React from 'react';
import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';

const Resources = () => {
  return (
    <ResourcesContainer name='resources'>
      <Divider
        style={{ color: '#01b8d8', fontWeight: '200px', fontSize: '34px' }}
      >
        Resources
      </Divider>

      <ResourcesList>
        <ResourceBox>
          <h3 className='resource-header'>
            What is Speech Language Therapy and how can a Speech Language
            Pathologist help?{' '}
          </h3>
          <Accordion disableGutters style={{ fontSize: '20px' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              Learn More
            </AccordionSummary>
            <AccordionDetails style={{ fontSize: '20px' }}>
              <p>
                Pediatric speech language pathologists assess and treat
                communication disorders and delays in children. These disorders
                may affect various aspects of communication, including speech,
                language, voice, fluency, and social communication skills. The
                goal of pediatric speech therapy is to help children develop and
                improve their communication abilities, enabling them to
                effectively express themselves and interact with others. A
                speech-language pathologist (SLP) works with children to address
                their specific needs and challenges. Pediatric speech therapy
                may involve a range of interventions and techniques, tailored to
                each child's age, developmental level, and areas of difficulty.
              </p>

              <p>
                Some common areas addressed in pediatric speech therapy include:
              </p>
              <ul>
                <li>
                  Articulation: Helping children produce speech sounds
                  correctly.
                </li>

                <li>
                  {' '}
                  Early Intervention: Focused on identifying and addressing
                  speech and language delays or disorders in children as early
                  as possible to maximize their communication potential.
                </li>

                <li>
                  {' '}
                  Fluency: Assisting children who stutter or have other fluency
                  disorders.
                </li>

                <li>
                  {' '}
                  Pragmatics: Self-advocacy and body autonomy, Perspective-taking, Self-regulation and self-awareness, problem solving and figurative language.
                </li>

                <li>
                  {' '}
                  Literacy: Supporting literacy development for reading,
                  writing, and spelling.
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <h3 className='resource-header'>Informational Websites</h3>
          <Accordion disableGutters style={{ fontSize: '20px' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              Learn More
            </AccordionSummary>
            <StyledAccordionDetails>
              <StyledList>
                <li>
                  <a
                    className='link'
                    href='https://www.asha.org/public/developmental-milestones/
'
                    target='_blank'
                    rel='noreferrer'
                  >
                    ASHA Developmental Milestones
                  </a>
                </li>

                <li>
                  {' '}
                  <a
                    className='link'
                    href='https://www.apraxia-kids.org/
'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Apraxia Kids
                  </a>
                </li>

                <li>
                  {' '}
                  <a
                    className='link'
                    href='autismsociety.org'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Autism Society
                  </a>
                </li>
              </StyledList>
            </StyledAccordionDetails>
          </Accordion>
        </ResourceBox>
      </ResourcesList>
    </ResourcesContainer>
  );
};

export default Resources;

const ResourcesContainer = styled.div`
  h2 {
    font-size: 35px;
    font-weight: 300;
    text-align: center;
    color: #023020;
  }
`;

const ResourcesList = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  padding: 2rem;
  font-weight: 100;
  gap: 1rem;
`;

const ResourceBox = styled.div`
  margin: auto;
  max-width: 95%;

  .resource-header {
    color: #01b8d8;
    font-size: 22px;
    font-weight: 500;
  }
`;

const StyledAccordionDetails = styled(AccordionDetails)`
  font-size: 20px;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  line-height: 30px;
  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    color: #01b8d8;
  }
`;
