import background from 'shared/background.jpg' 
import Container from 'shared/Container'
import {FullContainerBackground} from 'components/FullContainer'

export const Home = () => {
  return (
    <FullContainerBackground src={background}>
      <Container>
        <h1>Hello,<br/>
          <span>I'm Jose Suarez</span>
        </h1>
      </Container>
    </FullContainerBackground>
  )
}
