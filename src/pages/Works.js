import styled from 'styled-components'
import Container from 'shared/Container'

const FullContainer = styled.main`
  display: flex;
  align-items: center;
  height: 100vh;  
  border: 10px solid black;
  color: white;
`

export const Works = () => {
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
