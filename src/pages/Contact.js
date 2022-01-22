import styled from 'styled-components'
import {PageTemplate} from 'templates/PageTemplate'
import {Icon} from 'components/Icon'
import info from 'config'

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

const Social = styled(({className, icon, link}) => (
  <a href={link} target='_blank' rel='noreferrer' className={className}>
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
      title={info.contact.title}
      description={info.contact.description}>
      <FlexContainer>
      <ListGroup>
        {info.personalData
          .filter(elem => elem.contact !== false)
          .map((elem, index) => (
            <li key={index}><Icon icon={elem.icon} from='b'/>{elem.value}</li>
          ))
        }
      </ListGroup>
        <h2>Redes Sociles</h2>
        <ListSocial>
          {info.social.map((elem, index) => (
            <Social key={index} link={elem.link} icon={elem.icon} />
          ))}
        </ListSocial>
      </FlexContainer>
    </PageTemplate>
  )
}
