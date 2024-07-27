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
  background-color: #008080;
  position: absolute;
  width: 100%;
  color: white;
  text-align: center;
`;
