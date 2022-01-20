import styled from 'styled-components'
import imageDefault from 'shared/imgdefault.jpg'
import {ImageResponsive} from 'components/ImageResponsive'
import {PageTemplate} from 'templates/PageTemplate'
import {Link, Outlet} from 'react-router-dom'
import {Row, Col} from 'components/Grid'

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
  return (
    <PageTemplate 
      title='Works'
      description='Nulla facilisi. Vivamus vestibulum, elit in scelerisque ultricies, nisl nunc pulvinar ligula, id sodales arcu sapien in nisi. Quisque libero enim, mattis non augue posuere, venenatis dapibus urna.'>
      <Row>
        <Col size={4}>
        <CardContainer>
          <Link to='hola'>
            <ImageResponsive src={imageDefault} alt=""/>
          </Link>
          <CardBody>
            <h4>001/006</h4>
            <h3>Fringilla sit amet</h3>
            <p>Nulla facilisi. Vivamus vestibulum, elit in scelerisque ultricies.</p>
            <Button to='hola'>Discover</Button>
          </CardBody>
        </CardContainer>
        </Col><Col size={4}>
        <CardContainer>
          <Link to='hola'>
            <ImageResponsive src={imageDefault} alt=""/>
          </Link>
          <CardBody>
            <h4>001/006</h4>
            <h3>Fringilla sit amet</h3>
            <p>Nulla facilisi. Vivamus vestibulum, elit in scelerisque ultricies.</p>
            <Button to='hola'>Discover</Button>
          </CardBody>
        </CardContainer>
        </Col><Col size={4}>
        <CardContainer>
          <Link to='hola'>
            <ImageResponsive src={imageDefault} alt=""/>
          </Link>
          <CardBody>
            <h4>001/006</h4>
            <h3>Fringilla sit amet</h3>
            <p>Nulla facilisi. Vivamus vestibulum, elit in scelerisque ultricies.</p>
            <Button to='hola'>Discover</Button>
          </CardBody>
        </CardContainer>
        </Col><Col size={4}>
        <CardContainer>
          <Link to='hola'>
            <ImageResponsive src={imageDefault} alt=""/>
          </Link>
          <CardBody>
            <h4>001/006</h4>
            <h3>Fringilla sit amet</h3>
            <p>Nulla facilisi. Vivamus vestibulum, elit in scelerisque ultricies.</p>
            <Button to='hola'>Discover</Button>
          </CardBody>
        </CardContainer>
        </Col><Col size={4}>
        <CardContainer>
          <Link to='hola'>
            <ImageResponsive src={imageDefault} alt=""/>
          </Link>
          <CardBody>
            <h4>001/006</h4>
            <h3>Fringilla sit amet</h3>
            <p>Nulla facilisi. Vivamus vestibulum, elit in scelerisque ultricies.</p>
            <Button to='hola'>Discover</Button>
          </CardBody>
        </CardContainer>
        </Col><Col size={4}>
        <CardContainer>
          <Link to='hola'>
            <ImageResponsive src={imageDefault} alt=""/>
          </Link>
          <CardBody>
            <h4>001/006</h4>
            <h3>Fringilla sit amet</h3>
            <p>Nulla facilisi. Vivamus vestibulum, elit in scelerisque ultricies.</p>
            <Button to='hola'>Discover</Button>
          </CardBody>
        </CardContainer>
        </Col>

      </Row>
      <Outlet/>
    </PageTemplate>
  )
}
