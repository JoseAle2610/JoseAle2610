import styled from 'styled-components'
import {PageTemplate} from 'templates/PageTemplate'
import {Icon} from 'components/Icon'

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const ListGroup = styled.ul`
  list-style: none;
  vertical-align: middle;
  margin-bottom: 15px;
  i {
    margin-right: 10px;
    font-size: 20px;
  }
  li + li {
    margin-top: 10px;
  }
`

const ListSocial = styled.ul`
  list-style: none;
`

const Social = styled(({className, icon, href}) => (
  <a href={href} target='_blank' rel='noreferrer' className={className}>
    <i className={`bi bi-${icon}`}></i>
  </a>
))`
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color.dark};
  font-size: 32px;
  margin-right: 10px;
  vertical-align: middle;
  i {
    display: block;
    text-align: center;
    line-height: 1.5;
    color: #fff;
  }
`

export const Contact = () => {
  return (
    <PageTemplate 
      title='Contact'
      description='Podemos discutir acerca de nuevos proyectos o solo saludar a travez de mis redes socioales o por email'>
      <FlexContainer>
      <ListGroup>
        <li><Icon icon='telephone-fill' from='b'/>+58 412-5110735</li>
        <li><Icon icon='envelope-fill' from='b'/>jalesgervazzi@gmail.com</li>
        <li><Icon icon='geo-alt-fill' from='b' />Barquisimeto, estado lara - Venezuela</li>
        <li><Icon icon='globe' from='' />joseale2610.github.io</li>
      </ListGroup>
        <h2>Redes Sociles</h2>
        <ListSocial>
          <Social link='https://linkedin.com/jsuarez-g' icon='linkedin'/>
          <Social link='https://github.com/JoseAle2610' icon='github' /> 
          <Social link='https://www.instagram.com/j.alex.s.g/' icon='instagram' />
        </ListSocial>
      </FlexContainer>
    </PageTemplate>
  )
}
