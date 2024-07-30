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
  position: absolute;
  width: 100%;
  color: black;
  text-align: center;
  font-size: 18px;
  background-color: #FFD937;
`;
