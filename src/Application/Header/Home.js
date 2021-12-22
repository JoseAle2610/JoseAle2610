//import styled from 'styled-components'
import Container from '../../shared/Container'
import Greet from './Greet'
import ImageProfile from './ImageProfile'
import profile from '../../shared/perfil.jpg'

const Home = () => {
  return (
  <main>  
    <Container flex justify='center' align='center' py='2em'>
      <Greet></Greet>
      <ImageProfile src={profile} /> 
    </Container>
  </main>
  )
}

export default Home
