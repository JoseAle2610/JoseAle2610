import {SectionContainer} from 'shared/Container'
import {FullContainer} from 'components/FullContainer'
import {TextCenter} from 'components/TextCenter'
import {Footer} from 'components/Footer'

export const PageTemplate = ({title, description,children}) => {
  return (
    <FullContainer>
      <SectionContainer as='main'>
        <TextCenter>
          <h1>{title}</h1>
          <p>{description}</p>
        </TextCenter> 
        {children}
      </SectionContainer>
      <Footer />
    </FullContainer>
  )
}
