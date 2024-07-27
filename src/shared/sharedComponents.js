import styled from 'styled-components';

export const ImageContainer = styled.img`
width: ${(props) => props.width}%,
height: ${(props) => props.height}%,
border-radius: 5px;
margin-top: ${(props) => props.marginTop}rem;
margin-bottom: ${(props) => props.marginBottom}rem;
margin-left: ${(props) => props.marginLeft}rem;
margin-right:${(props) => props.marginRight}rem
`;
