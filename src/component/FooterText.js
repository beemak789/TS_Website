import React from 'react';
import styled from 'styled-components';

const FooterText = () => {
  return (
    <FooterTextContainer>
      <p>&copy; 2024 Designed by Brandy Mak</p>
    </FooterTextContainer>
  );
};

export default FooterText;



const FooterTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  color: black;
  text-align: center;
  font-size: 18px;
  background-color: #FFD937;

  & p {
    padding: 10px;
  }
`;
