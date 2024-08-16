import styled from 'styled-components';
import Divider from '@mui/material/Divider';

export const ImageContainer = styled.img`
width: ${(props) => props.width}%,
height: ${(props) => props.height}%,
border-radius: 5px;
margin-top: ${(props) => props.marginTop}rem;
margin-bottom: ${(props) => props.marginBottom}rem;
margin-left: ${(props) => props.marginLeft}rem;
margin-right:${(props) => props.marginRight}rem
`;


export const StyledDivider = styled(Divider)`
  color: #01b8d8;
  font-weight: 300;
  font-size: 34px;
  width: 100%;
`;
