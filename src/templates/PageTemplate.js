import {SectionContainer} from 'shared/Container'
import {FullContainer} from 'components/FullContainer'
import {TextCenter} from 'components/TextCenter'

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
    </FullContainer>
  )
}
