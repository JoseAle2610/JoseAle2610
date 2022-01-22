//import styled from 'styled-components'
import Container from '../../shared/Container'
import Greet from './Greet'
import ImageProfile from './ImageProfile'
import profile from '../../shared/perfil.jpg'
import {Row, Col} from '../../shared/Grid'

const Home = ({greeting}) => {
  return (
  <main>  
    <Container  py='4em'>
      <Row style={{display: 'flex', alignItems: 'center'}}>
        <Col size={1}>
          <Greet />
        </Col>
        <Col size={1}>
          <ImageProfile src={profile} /> 
        </Col>
      </Row>
    </Container>
  </main>
  )
}

export default Home
