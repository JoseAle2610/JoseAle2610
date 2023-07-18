import styled from 'styled-components'

export const breackPoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px'
}

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
  grid-column: span ${props => props.$size};
  // small
  ${props => props.$sm && `@media (min-width: ${breackPoints.sm}){
    grid-column: span ${props.$sm};
  }`} 
  // medium
  ${props => props.$md && `@media (min-width: ${breackPoints.md}){
    grid-column: span ${props.$md};
  }`} 
  // large
  ${props => props.$lg && `@media (min-width: ${breackPoints.lg}){
    grid-column: span ${props.$lg};
  }`} 
  // extra large
  ${props => props.$xl && `@media (min-width: ${breackPoints.xl}){
    grid-column: span ${props.$xl};
  }`} 
  // extra extra large
  ${props => props.$xxl && `@media (min-width: ${breackPoints.xxl}){
    grid-column: span ${props.$xxl};
  }`}
`

Col.defaultProps = {
  size: 12
}
