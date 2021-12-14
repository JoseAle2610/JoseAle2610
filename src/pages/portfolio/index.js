import Title from '../../components/title'
import styled from 'styled-components'
import {Row, Col} from '../../assets/grid'
import Container from '../../components/container'

const Proyect = ({className, title, description, date}) => (
  <Col size={1} className={className}>
    <div></div>
    <h4>{title}</h4>
    <p>{description}</p>
    <span>{date}</span>
  </Col>
)

const StyledProyect = styled(Proyect)`
  margin-left: 10px;
  padding: 10px;
  background-color: #e3e3e3;
  border-radius: 10px;
  h4 {
    color: #29a8cb;
  }
  p {
    font-size: 14px;
    color: hsl(0,0%,50%);
  }
`

const Portfolio = () => (
  <Container>
    <Title>Portfolio</Title>
    <Row>
      <StyledProyect 
        title='Granja Avicola las tunas'
        description='Sistema para la gestion de la produccion de huevos'
        date='Abril 2021'
      />
      <StyledProyect 
        title='Liga de baseball Hilda Tona'
        description='Sistema para el manejo de las estadisticas de la liga de baseball'
        date='Abril 2020'
      />
    </Row>
  </Container>
)

export default Portfolio 
