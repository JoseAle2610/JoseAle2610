import styled from 'styled-components'

const Footer = styled(({className}) => (
  <footer className={className}>
    <h3>Copyright </h3> 
  </footer>
))`
  padding: 2em;
  text-align: center;
  background-color: ${({theme}) => theme.color.primary};
  color: #fff;
`


export default Footer
