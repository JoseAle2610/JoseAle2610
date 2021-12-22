import PageTemplate from '../../shared/PageTemplate'
import Container from '../../shared/Container'
import Interest from '../../shared/Interest'

const Skills = () => (
  <PageTemplate header='Habilidades' color='#fff'>
    <Container py='3em' flex justify='center' align='center'>
      <Interest icon='html5-plain' title='HTML' /> 
      <Interest icon='css3-plain' title='CSS' /> 
      <Interest icon='javascript-plain' title='JS' /> 
      <Interest icon='react-plain' title='React' /> 
      <Interest icon='php-plain' title='PHP' /> 
      <Interest icon='laravel-plain' title='Laravel' /> 
      <Interest icon='python-plain' title='Python' /> 
      <Interest icon='linux-plain' title='Linux' /> 
      <Interest icon='docker-plain' title='Docker' /> 
      <Interest icon='firebase-plain' title='Firebase' /> 
      <Interest icon='mysql-plain' title='Mysql' /> 
    </Container> 
  </PageTemplate>
)

export default Skills
