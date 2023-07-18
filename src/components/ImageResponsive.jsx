import styled from 'styled-components'

export const ImageResponsive = styled.img`
  display: block;
  width: 100%;
  height: auto;
  ${props => props.$radius && `border-radius: 10px`};
  filter: grayscale(60%);
`
