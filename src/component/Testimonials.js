import React from 'react';
import styled from 'styled-components';
import { testimonials } from '../utils/clientinfo';
import Carousel from 'react-material-ui-carousel';
import Divider from '@mui/material/Divider';

const Testimonials = () => {
  return (
    <TestimonialsContainer name='testimonials'>
      <Divider
        style={{ color: '#008080', fontWeight: '100', fontSize: '32px' }}
      >
        Testimonials
      </Divider>

      <p className='hear-from'>Hear from some of our satisfied clients</p>

      <Carousel
        autoPlay={true}
        navButtonsAlwaysInvisible={true}
        navButtonsProps={{
          style: {
            backgroundColor: '#023020',
            borderRadius: 50,
          },
        }}
        className='control-arrow'
      >
        {testimonials.map((testimonial, idx) => {
          return (
            <SingleTestimonialCard key={idx}>
              <div key={idx} className='single-testimonial'>
                <b>"</b>
                {testimonial}
                <b>"</b>
              </div>
            </SingleTestimonialCard>
          );
        })}
      </Carousel>
    </TestimonialsContainer>
  );
};

export default Testimonials;

const TestimonialsContainer = styled.div`
  height: 350px;
  .fancy {
    font-size: 35px;
    text-align: center;
    color: #023020;
  }

  .hear-from {
    font-size: 25px;
    text-align: center;
    font-weight: 100;
    color: #8e3e63;
    display: flex;
    flex-direction: column;
    @media (min-width: 375px) and (max-width: 768px) {
      padding: 2rem;
    }
  }

  @media (min-width: 375px) and (max-width: 768px) {
    height: 840px;
  }
`;

const SingleTestimonialCard = styled.div`
  border-radius: 2px;
  background: white;
  color: black;
  display: flex;
  line-height: 15pt;
  padding: 2rem;
  font-size: 20px;
  font-weight: 100pt;
  margin: auto;
  text-align: center;

  @media (min-width: 375px) and (max-width: 768px) {
    padding: 2rem;
    margin-top: -1rem;
  }
`;
