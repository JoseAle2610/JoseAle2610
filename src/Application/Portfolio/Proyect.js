//import styled from 'styled-components'
import Button from '../../shared/Button'
import Card from './Card'

const Proyect = ({title, description, github, demo}) => (
  <Card >
    <h3>{title}</h3>
    <p>{description}</p>
    <Button as='a' href={github}>
      Github
    </Button>
  </Card>
)

export default Proyect
