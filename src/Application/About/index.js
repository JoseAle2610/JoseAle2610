import PageTemplate from '../../shared/PageTemplate'
import Container from '../../shared/Container' 
import {Row, Col} from '../../shared/Grid'
import {Detail, Details} from './Details'
import Interest from '../../shared/Interest'

const About = () => (
  <PageTemplate header='Acerca de mi'>
    <Container py='3em'>
      <p>Técnico Superior en Informática, apasionado por la tecnología y el aprendizaje, aspirando a un puesto de entrada que permita desarrollar y poner a disposición mis habilidades y desenvolverse en el ámbito laboral.</p>
      <Row>
        <Col size={1}>
          <Details title='Detalles Personales'>
            <Detail title='Nacimiento' value='26-10-2001'/>
            <Detail title='Telefono' value='+58-414-5110735'/>
            <Detail title='Email' value='jalesgervazzi@gmail.com'/>
            <Detail title='Direccion' value='Carrera 19 entre calles 20 y 21'/>
            <Detail title='Pagina' value='jsuarez.online'/>
          </Details>
        </Col>
        <Col size={1}>
          <Details title='Intereses'>
            <Interest icon='house' title='encerrado' from='bootstrap'/>
            <Interest icon='github-plain' title='github'/>
            <Interest icon='music-note' title='Musica' from='bootstrap'/>
            <Interest icon='camera-video' title='Cine' from='bootstrap'/>
            <Interest icon='brush' title='Arte' from='bootstrap'/>
          </Details>
        </Col>
      </Row>
    </Container>
  </PageTemplate>
)

export default About
