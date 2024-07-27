import React from 'react';
import styled from 'styled-components';
import Divider from '@mui/material/Divider';

const AboutMe = () => {
  return (
    <AboutMeContainer name='aboutUs'>
      <Divider style={{ color: '#008080', fontWeight: '100' }}>About</Divider>

      <AboutMeSection>
        <ProfileImg src='/amyElderProfile.jpg' alt='profile-pic'></ProfileImg>
        <AboutMeParagraphContainer>
          <div className='clinician-header-container'>
            <p className='clinician-name'>Amy Elder MA, CCC-SLP</p>
            <p className='clinician-title'>
              <i>Owner and Speech-Language Pathologist</i>
            </p>
          </div>

          <div className='paragraph'>
            <p>
              Amy Elder, owner and ASHA certified speech language pathologist at
              Full Bloom Speech Language Pathology earned both her undergraduate
              and graduate degrees from Ohio University in Athens, OH. She has
              been a licensed speech language pathologist since 2006 and
              specializes in pediatrics. She has worked in a variety of settings
              including public schools, private schools, home health, and
              private practice. Amy is passionate about helping children improve
              their communication skills to gain independence, confidence,
              achieve academic success, and make meaningful relationships.{' '}
            </p>

            <p>
              Amy enjoys including parents and caregivers in the therapy process
              to educate and empower caregivers on how they can help boost their
              child's speech and language skills at home during their daily
              activities. Amy believes that speech language therapy must be a
              collaborative, team effort which includes not only other
              professionals that may also be working with your child, but you,
              the parents. She has witnessed firsthand how powerful a "team
              approach" can be for making efficient progress towards meeting
              communication goals. Amy has extensive training and expertise with
              a variety of diagnosis including articulation, phonology,
              literacy, childhood apraxia of speech, developmental language
              disorder, late talkers, gestalt language processing, and pragmatic
              language.
            </p>
          </div>
        </AboutMeParagraphContainer>
      </AboutMeSection>

      <OurPhilosophyContainer>
        <FamilyImg src='/workingWithChild.jpg' />
        <PhilosophyText>
          <p className='header-2'>
            <b>Our Philosophy</b>
          </p>
          <p className='paragraph'>
            At Full Bloom Speech Language Pathology, we believe in nurturing the
            communication skills of our youngest clients, laying the foundation
            for a lifetime of success.{' '}
          </p>

          <p>
            We understand the unique needs of children and the critical role
            that communication plays in their development, relationships, and
            overall well-being.
          </p>

          <p>
            Our neurodiversity-affirming practice celebrates that communication
            can take many forms, respecting each individual's unique way of
            expressing themselves. We strive to create an environment where all
            forms of communication are valued and supported, and where every
            client is empowered to achieve their full potential.{' '}
          </p>

          <p className='header-3'>
            <b>Our Location</b>
          </p>
          <p>
            Our services are primarily provided at our clinic in Cornelius, NC.
            We have two therapy rooms as well as a comfortable waiting room for
            families. We are occasionally able to accommodate home or school
            visits based on location and our availability.{' '}
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
`;

const AboutMeSection = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem;
  align-items: center;

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
    font-size: 28px;
    text-align: start;
    color: #8e3e63;

    .clinician-name {
      margin: auto;
      margin-left: 1.2rem;
    }

    .clinician-title {
      font-size: 13px;
      margin-left: 1rem;
    }
  }
  .paragraph {
    padding: 1.2rem;
    font-size: 18px;
    line-height: 16pt;
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
