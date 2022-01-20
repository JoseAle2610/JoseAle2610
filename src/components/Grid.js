import styled from 'styled-components'

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 20px; 
`

  //xs: 0,
  //sm: 576px,
  //md: 768px,
  //lg: 992px,
  //xl: 1200px,
  //xxl: 1400px

export const Col = styled.div`
  grid-column: span ${props => props.size};
  @media (max-width: 480px){
    grid-column: span 12;
  }
`

Col.defaultProps = {
  size: 12
}
