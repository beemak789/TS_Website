import React from 'react';
import styled from 'styled-components';

const DesignedByContainer = () => {
  return (
    <TextContainer>
      <p>&copy; 2024 Designed by Brandy Mak</p>
    </TextContainer>
  );
};

export default DesignedByContainer;
// this is first commit



const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  color: black;
  text-align: center;
  font-size: 18px;
  background-color: #FED32C;

  & p {
    padding: 10px;
  }
`;
