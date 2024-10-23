import { Divider } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const AboutMe = () => {
  return (
    <AboutMeContainer name='aboutUs'>
      <AboutMeSection>
        <ProfileImg src='/main.jpg' alt='profile-pic'></ProfileImg>
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
              intervention services. I specialize in speech sounds disorders and
              early intervention, and I am proudly a neurodiversity-affirming
              therapist! In my free time, I love spending time with my family
              and friends, cooking, trying local restaurants, and traveling!
            </p>
          </div>
        </AboutMeParagraphContainer>
      </AboutMeSection>
      <Divider />

      <OurPhilosophyContainer>

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

          <OfficeImg src='office.jpg' alt='office' />

          <p className='header-3'>
            <b>Mission</b>
          </p>
          <p>
            My mission is to provide individualized services that your child
            will love and grow from and empower parents with the knowledge of
            how to support their child's communication skills.
          </p>
        </PhilosophyText>
        <AllBrainsImg src='allbrains.jpg' alt='all-brains' />
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

  @media (min-width: 375px) and (max-width: 768px) {
    margin-top: 3rem;
  }
`;

const AboutMeSection = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem;
  align-items: center;
  font-size: 40px !important;

  @media (min-width: 375px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
`;

const ProfileImg = styled.img`
  height: 60%;
  width: 26%;
  border-radius: 5px;
  margin-top: -0.5rem;
  padding: 1.5rem;
  object-fit: cover;

  @media (min-width: 375px) and (max-width: 768px) {
    height: 90%;
    width: 70%;
    margin-top: -5rem;
    object-fit: cover;
  }
`;

const AboutMeParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 22px;

  .clinician-header-container {
    font-size: 30px;
    text-align: start;

    .clinician-name {
      margin: auto;
      margin-left: 1.2rem;
      color: #01b8d8;
    }

    .clinician-title {
      font-size: 16px;
      margin-left: 1rem;
      color: #01b8d8;
    }

    @media (min-width: 375px) and (max-width: 768px) {
    text-align: center;
  }
  }
  .paragraph {
    padding: 1.2rem;
    font-size: 22px;
    line-height: 22pt;
    font-weight: 100;
    text-align: start;
    margin-top: -2rem;

    @media (min-width: 375px) and (max-width: 768px) {
    text-align: center;
  }
  }


`;

const OurPhilosophyContainer = styled.div`
  display: flex;
  background-color: white;
  padding: 2rem;
  gap: 2rem;

  @media (min-width: 375px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const PhilosophyText = styled.div`
  font-size: 22px;
  padding: 1.2rem;
  line-height: 22pt;
  font-weight: 100;
  text-align: center;
  margin-left: 1.2rem;
  height: fit-content;

  .header-2 {
    font-size: 28px;
    text-align: center;
    color: #01b8d8;
  }

  .header-3 {
    font-size: 28px;
    text-align: center;
    color: #01b8d8;
    margin-top: 4rem;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    width: 90%;
    height: 90%;
    margin: auto;
  }
`;

const AllBrainsImg = styled.img`
  height: 44%;
  width: 34%;
  object-fit: cover;
  border-radius: 0.4rem;

  @media (min-width: 375px) and (max-width: 768px) {
    height: 90%;
    width: 70%;
    object-fit: cover;
  }
`;
const OfficeImg = styled.img`
  height: 55%;
  width: 45%;
  margin-top: 1rem;
  border-radius: 0.3rem;
  object-fit: cover;
  box-shadow: 0px 12px 28px 0px rgba(140, 149, 159, 0.3);

  @media (min-width: 375px) and (max-width: 768px) {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
