import styled from 'styled-components'
import {ImageResponsive} from '@/components/ImageResponsive'
import {PageTemplate} from '@/templates/PageTemplate'
import {Outlet} from 'react-router-dom'
import info from '@/config'
import Carousel from '@/components/Carousel'
import Dialog from '@/components/Dialog'
import { useState } from 'react'
import { ListSocial, Social } from './Contact'

const CardContainer = styled.article`
  height: 100%;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  img {
    border: solid 3px #eee;
  border-radius: 10px 10px 0 0;

  }
`

const CardBody = styled.div`
  padding: 0 2rem;
  h4{
    margin-top: 5px;
  }
  i{
    color: ${props => props.theme.color.dark};
  }
`

const cardFormatNumber = (number) => {
  return number.toString().padStart(3, '0')
}

export const Works = () => {
  const [dialogImg, setDialogImg] = useState('')
  //const info = useInfo()
  return (
    <>
    <PageTemplate 
      title={info.work.title}
      description={info.work.description}>
        <Carousel>

          {info.works.map((elem, index) => (
              <CardContainer key={index} onClick={() => setDialogImg(elem.img)}>
                <div>
                  <ImageResponsive src={elem.img} alt="screenshot"/>
                  <CardBody>
                    <div>
                      <h4>{cardFormatNumber(index + 1)}/{cardFormatNumber(info.works.length)}</h4>
                      <h3>{elem.title}</h3>
                      <p>{elem.description}</p>
                    </div>
                  </CardBody>
                </div>
                <CardBody style={{marginBottom: '10px'}}>
                  <ListSocial>
                    {elem.links.map((e, i) => (
                      <Social key={i} link={e.url} icon={e.icon} transparent style={{color: 'black'}} />
                    ))}
                  </ListSocial>
                </CardBody>
              </CardContainer>
          ))}
        </Carousel>
        <Outlet></Outlet>
    </PageTemplate>
    <Dialog isOpen={dialogImg !== ''} onClose={() => setDialogImg('')}>
      <ImageResponsive src={dialogImg} alt="screenshot" $radius/>
    </Dialog>
    </>
  )
}
