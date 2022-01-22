//import {useInfo} from 'context'
import styled from 'styled-components'
import {ImageResponsive} from 'components/ImageResponsive'
import {PageTemplate} from 'templates/PageTemplate'
import {Link, Outlet} from 'react-router-dom'
import {Row, Col} from 'components/Grid'
import info from 'config'

const CardContainer = styled.article`
`

const CardBody = styled.div`
    background-color: #eee;
    padding: 1rem 2rem;
    position: relative;
    width: 95%;
    margin: -8em auto 20px;
`

const Button = styled(Link)`
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  padding: 8px 14px;
  line-height: 1.78;
  border-radius: 0;
  text-decoration: none;
  color: #000;
  background-color: transparent;
  border: 1px solid #000;
  font-size: 11px;
`

export const Works = () => {
  //const info = useInfo()
  return (
    <PageTemplate 
      title={info.work.title}
      description={info.work.description}>
      <Row>
        {info.works.map((elem, index) => (
          <Col size={4} key={index}>
            <CardContainer>
              <Link to={elem.markdown}>
                <ImageResponsive src={elem.img} alt="screenshot"/>
              </Link>
              <CardBody>
                <h4>001/006</h4>
                <h3>{elem.title}</h3>
                <p>{elem.description}</p>
                <Button to={elem.markdown}>Discover</Button>
              </CardBody>
            </CardContainer>
          </Col>
        ))}
      </Row>
      <Outlet/>
    </PageTemplate>
  )
}
