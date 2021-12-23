import styled from 'styled-components'
import Button from '../../shared/Button'

const ButtonReverse = styled(Button)`
  border-color: #fff;
  color: ${(props) => props.theme.color.primary};
  background-color: #fff;
  margin-top: 10px;
  &:hover {
    color: ${(props) => props.theme.color.dark};
  }
`

const Greet = () => {
  return (
    <div>
      <h1>Hola, Soy Jose Suarez</h1>
      <p>Soy Técnico Superior Universitario en Informática y Desarrollador Web con experiencia en desarrollo de sistemas y herramientas de automatización</p>
      <ButtonReverse
        as='a' href='https://joseale2610.github.io/curriculum' target='_blank' rel='noreferrer'
      >Mira mi curriculum</ButtonReverse>
    </div>
  )
}

export default Greet
