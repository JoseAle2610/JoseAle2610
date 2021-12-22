import PageTemplate from '../../shared/PageTemplate'
import Container from '../../shared/Container'
import Proyect from './Proyect'

const Portfolio = () => (
  <PageTemplate header='Portfolio'>
    <Container py='3em'>
      <Proyect
        title='Granja'
        description='Proyecto para la gestion de la produccion de huevos'
        github='https://github.com'
      />
      <Proyect 
        title='Baseball'
        description='Sistema para el analicis de estadisticas para la lasdlfkjalskdfjlkj'
        github='https://githun.com'
      />
    </Container>
  </PageTemplate>
)

export default Portfolio
