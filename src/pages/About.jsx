import styled from 'styled-components'
import {PageTemplate} from '@/templates/PageTemplate'
import Interest from '@/components/IconBox'
import {ImageResponsive} from '@/components/ImageResponsive'
import {Row, Col} from '@/components/Grid'
import perfil from '@/assets/perfil.jpg'
import info from '@/config'

const Detail = styled(({className, label, value}) => (
  <div className={className}>
    <label>{label}</label>
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
      title={info.about.title}
      description={info.about.description}>
      <Row>
        <Col md={7}>
          <h2>Detalles Personales</h2>
          {info.personalData.map((elem, index) => (
            <Detail label={elem.label} value={elem.value} key={index}/>
          ))}
          <h2>Intereses</h2>
          {info.interests.map((elem, index) => (
            <Interest icon={elem.icon} title={elem.label} from='bootstrap' key={index}/>
          ))}
        </Col>
        <Col md={5}>
          <ImageResponsive src={perfil} alt='perfil' />
        </Col>
      </Row>
    </PageTemplate>
  )
}
