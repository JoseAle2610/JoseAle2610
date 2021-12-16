import styled from 'styled-components'
import Title from '../../components/title'
import {Row, Col} from '../../assets/grid'
import Container from '../../components/container'

const Interest = ({className, icon, text}) => (
  <div className={className}>
    <i className={`bi bi-${icon}`}></i>
    <label>{text}</label>
  </div>
)

const StyledInterest = styled(Interest)`
  display: inline-block;
  background-color: #e3e3e3;
  border-radius: 10px;
  padding: 10px;
  margin-top: 15px;
  margin-right: 10px;
  min-width: 80px;
  i {
    text-align: center;
    display: block;
    color: #29a8cb;
    font-size: 24px;
  }
  label {
    display: block;
    text-align: center;
  }
`
const Detail = ({className, name, value}) => (
  <div className={className}>
    <label>{name}</label>
    <span>{value}</span>
  </div>
)

const StyledDetail = styled(Detail)`
  margin-bottom: 8px;
  label {
    display: inline-block;
    color: #29a8cb;
    min-width: 200px;
  }
`

const About = () => (
  <Container>
    <Title>Acerca de mi</Title>
    <p style={{marginBottom: '20px'}}>Técnico Superior en Informática, apasionado por la tecnología y el aprendizaje, aspirando a un puesto de entrada que permita desarrollar y poner a disposición mis habilidades y desenvolverse en el ámbito laboral.</p>
    <Row>
      <Col size={1}>
        <h4 style={{marginBottom: '15px'}}>Detalles personales</h4>
        <StyledDetail name='Nacimiento' value='26-10-2001'/>
        <StyledDetail name='Telefono' value='0414-5110735'/>
        <StyledDetail name='Email' value='jalesgervazzi@gmil.com'/>
        <StyledDetail name='Direccion' value='Carrera 19 entre calles 20 y 21'/>
        <StyledDetail name='Pagina Web' value='jsuarez.online'/>
      </Col>
      <Col size={1}>
        <h4>Mis intereses</h4>
        <StyledInterest icon='github' text='github' />
        <StyledInterest icon='file-earmark-music' text='Music' />
        <StyledInterest icon='pencil' text='Art' />
        <StyledInterest icon='camera' text='Cinema' />
      </Col>
    </Row>
  </Container>
)

export default About
