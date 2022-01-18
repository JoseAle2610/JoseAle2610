//import styled from 'styled-components'
import Container from '../../shared/Container'
import NavItems from './NavItems'

function Navbar () {
  return (<nav>
    <Container flex justify='center' align='center'>
      <NavItems>
        <li>Habilidades</li>
        <li>Acerca de</li>
        <li>Portfolio</li>
        <li>Contacto</li>
      </NavItems>
    </Container>
  </nav>)
}

export default Navbar
