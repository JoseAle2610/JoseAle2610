import styled from 'styled-components'
import { useNavigate } from '@/hooks/useNavigate'

const NavbarContainer = styled.nav`
  position: fixed;
  display: flex;
  top: 0;
  justify-content: center;
  width: 100%;
  z-index: 1000;
`

//const ButtonToggelCollapse = styled.button`
  //border: none;
  //background-color: transparent;
//`

const NavbarItems = styled.ul`
  background-color: black;
  border-radius: 0 0 10px 10px;
  li {
    display: inline-block;
  }
  a {
    display: inline-block;
    padding: .5em .8em;
    text-decoration: none;
    color: #aaa;
  }
`

export const Navbar = ({routes}) => {
  const [handleNavigate] = useNavigate()
  return (
<header>
  <NavbarContainer>
    <NavbarItems>
      {routes.map((elem, index) => (
        <li key={index}>
          <a href={elem.to} onClick={handleNavigate}>{elem.name}</a>
        </li>
      ))}
    </NavbarItems>
  </NavbarContainer>
</header>
  )
}

Navbar.defaultProps = {
  routes: [
    {to: '/', name: 'Home'}
  ]
}
