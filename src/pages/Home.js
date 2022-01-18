import styled from 'styled-components'
import background from 'shared/background.jpg' 
import Container from 'shared/Container'

const FullContainer = styled.main`
  display: flex;
  align-items: center;
  height: 100vh;  
  background-image:
    linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)),
    url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  border: 10px solid black;
  color: white;
  h1{
    font-size: 70px;
  }
`

export const Home = () => {
  return (
    <FullContainer>
      <Container>
        <h1>Hello,<br/>
          <span>I'm Jose Suarez</span>
        </h1>
      </Container>
    </FullContainer>
  )
}
