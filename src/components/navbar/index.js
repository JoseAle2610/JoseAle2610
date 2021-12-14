import styled from 'styled-components'
import Container from '../../components/container'

const NavbarContainer = styled(Container)`
  display: flex;
  color: #29a8cb;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  
`
const NavbarTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
`
const NavbarLinks = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
  li {
    color: hsl(0, 0%, 35%);
    margin-left: 1.5em;
  }
`

const Navbar = () => (
  <NavbarContainer>
    <NavbarTitle>
      JSuarez
    </NavbarTitle>
    <NavbarLinks>
      <li>Home</li>
      <li>About</li>
      <li>Portfolio</li>
      <li>Contact</li>
    </NavbarLinks>
  </NavbarContainer>
)

export default Navbar
