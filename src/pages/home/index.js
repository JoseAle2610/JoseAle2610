import styled from 'styled-components'
import perfil from '../../assets/img/perfil.jpg'
import Container from '../../components/container'

const HomeContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3em;
  margin-top: 50px;
`

const Greet = styled.section`
  color: #29a8cb;
  width: 300px;
`

const Card = styled.div`
  display: flex;
  margin-right: 10px;
  flex-direction: column;
  align-items: center;
  width: 300px;
  border-radius: 10px;
  background-color: #e3e3e3;
  padding-bottom: 10px;
  color: hsl(0, 0%, 35%);
`

const CardImage = styled.img`
  margin-top: -70px;
  margin-bottom: 20px;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 10px solid rgb(41, 168, 203);
  box-shadow: 0 0 0 15px rgba(41, 168, 203, .3);
`

const Home = () => (
  <HomeContainer>
    <Card>
      <CardImage src={perfil}></CardImage>
      <h2>Desarrollador Web</h2>
    </Card>
    <Greet><h1>¡Hola! Mi nombre es Jose Suarez</h1></Greet>
  </HomeContainer>
)

export default Home
