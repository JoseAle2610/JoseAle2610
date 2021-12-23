import PageTemplate from '../../shared/PageTemplate'
import Container from '../../shared/Container'
import Proyect from './Proyect'

const Portfolio = () => (
  <PageTemplate header='Portfolio'>
    <Container py='3em'>
      <Proyect
        title='Granja Avícola Las Tunas'
        description='Desarrollo de un sistema para la administración de la producción de Huevos.'
        github='https://github.com/Azumie/Granja'
      />
      <Proyect 
        title='Liga de Beisbol menor Hilda de Tona'
        description='Desarrollo de un sistema para el manejo de las estadísticas de la Liga Especial de Béisbol Menor.'
        github='https://github.com/JoseAle2610/Sistema-Baseball'
      />
    </Container>
  </PageTemplate>
)

export default Portfolio
