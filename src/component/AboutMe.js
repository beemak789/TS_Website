import React from 'react';
import styled from 'styled-components';
import Divider from '@mui/material/Divider';

const AboutMe = () => {
  return (
    <AboutMeContainer name='aboutUs'>
      <Divider style={{ color: '#008080', fontWeight: '100' }}>About</Divider>

      <AboutMeSection>
        <ProfileImg src='/profile.jpg' alt='profile-pic'></ProfileImg>
        <AboutMeParagraphContainer>
          <div className='clinician-header-container'>
            <p className='clinician-name'>Tinetta Serdinak MA, CCC-SLP</p>
            <p className='clinician-title'>
              <i>Owner and Speech-Language Pathologist</i>
            </p>
          </div>

          <div className='paragraph'>
            <p>
              I am a licensed, ASHA-certified, pediatric speech-language
              pathologist. I am a two-time graduate of the University of Akron,
              receiving my bachelor’s and master’s degrees there. I have over 15
              years of experience working with children with speech sound
              disorders, autism, fluency, developmental disabilities, receptive
              and expressive language disorders, language delay, and early
              intervention services. I specialize in speech sounds disorders,
              and I am proudly a neurodiversity-affirming therapist! In my free
              time, I love spending time with my family and friends, cooking,
              trying local restaurants, and traveling!
            </p>
          </div>
        </AboutMeParagraphContainer>
      </AboutMeSection>

      <OurPhilosophyContainer>
        <FamilyImg src='/office.jpg' />
        <PhilosophyText>
          <p className='header-2'>
            <b>Philosophy</b>
          </p>
          <p className='paragraph'>
            My passion for my career has shaped my love for teaching others
            about communication, speech, and language development. I believe in
            incorporating play into therapy because play can have a powerful
            impact on child development, learning, confidence, and well-being.
          </p>

          <p className='header-3'>
            <b>Mission</b>
          </p>
          <p>
            My mission is to provide individualized services that your child
            will love and grow from and empower parents with the knowledge of
            how to support their child's communication skills.
          </p>
        </PhilosophyText>
      </OurPhilosophyContainer>
    </AboutMeContainer>
  );
};

export default AboutMe;

const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 32px;
  font-weight: bold;
  background-color: white;
  border: 2px solid green;
`;

const AboutMeSection = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem;
  align-items: center;
  border: 2px solid orange;
  font-size: 40px !important;

  @media (min-width: 375px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
`;

const ProfileImg = styled.img`
  width: 30%;
  border-radius: 5px;
  margin-top: -0.5rem;
  padding: 1.5rem;

  @media (min-width: 375px) and (max-width: 768px) {
    width: 90%;
    object-fit: cover;
    height: auto;
  }
`;

const AboutMeParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;

  .clinician-header-container {
    font-size: 34px;
    text-align: start;
    color: #8e3e63;

    .clinician-name {
      margin: auto;
      margin-left: 1.2rem;
    }

    .clinician-title {
      font-size: 18px;
      margin-left: 1rem;
    }
  }
  .paragraph {
    padding: 1.2rem;
    font-size: 24px;
    line-height: 22pt;
    font-weight: 100;
    text-align: start;
    margin-top: -2rem;
  }
`;

const OurPhilosophyContainer = styled.div`
  display: flex;
  background-color: white;
  padding: 2rem;

  @media (min-width: 375px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const FamilyImg = styled.img`
  width: 30%;
  border: 2px;
  border-radius: 5px;
  padding: 1.5rem;

  @media (min-width: 375px) and (max-width: 768px) {
    width: 90%;
    object-fit: cover;
    height: auto;
  }
`;

const PhilosophyText = styled.div`
  font-size: 18px;
  padding: 1.2rem;
  line-height: 16pt;
  font-weight: 100;
  text-align: start;
  margin-left: 1.2rem;
  margin-top: 1.5rem;

  .header-2 {
    font-size: 28px;
    text-align: start;
    color: #8e3e63;
  }

  .header-3 {
    font-size: 28px;
    text-align: start;
    color: #8e3e63;
    margin-top: 4rem;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    width: 90%;
    height: 90%;
    margin: auto;
  }
`;
