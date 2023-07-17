//import {useInfo} from 'context'
import styled from 'styled-components'
import {ImageResponsive} from '@/components/ImageResponsive'
import {PageTemplate} from '@/templates/PageTemplate'
import {Link, Outlet} from 'react-router-dom'
import info from '@/config'
import Carousel from '@/components/Carousel'
import Dialog from '@/components/Dialog'
import { useState } from 'react'

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
const cardFormatNumber = (number) => {
  return number.toString().padStart(3, '0')
}

export const Works = () => {
  const [dialogImg, setDialogImg] = useState('')
  //const info = useInfo()
  return (
    <PageTemplate 
      title={info.work.title}
      description={info.work.description}>
        <Carousel>

          {info.works.map((elem, index) => (
              <CardContainer key={index} onClick={() => setDialogImg(elem.img)}>
                <ImageResponsive src={elem.img} alt="screenshot"/>
                <CardBody>
                  <h4>{cardFormatNumber(index + 1)}/{cardFormatNumber(info.works.length)}</h4>
                  <h3>{elem.title}</h3>
                  <p>{elem.description}</p>
                  <Button to={elem.markdown}>Discover</Button>
                </CardBody>
              </CardContainer>
          ))}
        </Carousel>
        <Dialog isOpen={dialogImg !== ''} onClose={() => setDialogImg('')}>
          <ImageResponsive src={dialogImg} alt="screenshot" radius="true"/>
        </Dialog>
        <Outlet></Outlet>
    </PageTemplate>
  )
}
