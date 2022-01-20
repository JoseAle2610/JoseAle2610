import styled from 'styled-components'
import {PageTemplate} from 'templates/PageTemplate'
import Interest from 'components/IconBox'
import {ImageResponsive} from 'components/ImageResponsive'
import {Row, Col} from 'components/Grid'
import perfil from 'shared/perfil.jpg'

const DetailsList = styled.div`
  
`

const Detail = styled(({className, name, value}) => (
  <div className={className}>
    <label>{name}</label>
    <span>{value}</span> 
  </div>
))`
  label {
    font-weight: 700;
    display: inline-block;
    min-width: 100px;
    margin-bottom: 15px;
    padding-right: 5px;
  }
`

export const About = () => {
  return (
    <PageTemplate 
      title='About'
      description='Técnico Superior en Informática, apasionado por la tecnología y el aprendizaje, aspirando a un puesto de entrada que permita desarrollar y poner a disposición mis habilidades y desenvolverse en el ámbito laboral.'>
      <Row>
        <Col size={7}>
          <h2>Detalles Personales</h2>
          <Detail name='Telefono' value='0414 5110735' />
          <Detail name='Email' value='jalesgervazzi@gmail.com' />
          <Detail name='Web' value='joseale2610.github.io' />
          <Detail name='Cumpleaños' value='26-10-2021' />
          <h2>Intereses</h2>
          <Interest icon='book' title='Aprender' from='bootstrap'/>
          <Interest icon='music-note' title='Musica' from='bootstrap'/>
          <Interest icon='camera-video' title='Cine' from='bootstrap'/>
          <Interest icon='brush' title='Arte' from='bootstrap'/>
        </Col>
        <Col size={5}>
          <ImageResponsive src={perfil} alt='perfil' />
        </Col>
      </Row>
    </PageTemplate>
  )
}
