import React from 'react';
import styled from 'styled-components';
import ServiceTable from './ServiceTable';
import { StyledDivider } from '../shared/sharedComponents';

const Services = () => {
  return (
    <ServicesContainer name='services'>
      <ServiceSection>
        <StyledDivider style={{ marginBottom: '2rem' }}>Services</StyledDivider>
        <ServiceTable />
      </ServiceSection>
    </ServicesContainer>
  );
};

const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: white;

  .our-services-header {
    font-size: 25px;
    font-weight: 300pt;
    text-align: center;
    padding: 1rem;
    line-height: 10px;
    margin: auto;
    margin-bottom: 2rem;
    width: 100%;
    color: #8e3e63;
    font-weight: 500;
  }
`;

const ServiceSection = styled.div`
  padding: 2rem;

  .fancy {
    font-size: 35px;
    font-weight: 300;
    text-align: center;
    color: #023020;
  }
  .explore {
    font-size: 20px;
    text-align: center;
    font-weight: 100;
  }
`;

export default Services;
