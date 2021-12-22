import PageTemplate from '../../shared/PageTemplate'
import Container from '../../shared/Container' 
import Social from './Social'
import Location from './Location'

const About = () => (
  <PageTemplate header='Contacto'>
    <Container py='3em'>
      <p>Podemos discutir acerca de nuevos proyectos o solo saludar a travez de mis redes socioales o por email</p> 
      <Location />
      <Social icon='github' href='https://github.com/JoseAle2610/' />
      <Social icon='linkedin' href='https://www.linkedin.com/in/jsuarez-g/' />
    </Container>
  </PageTemplate>
)

export default About
