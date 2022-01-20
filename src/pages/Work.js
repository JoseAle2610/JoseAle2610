import {PageTemplate} from 'templates/PageTemplate'
import {useParams} from 'react-router-dom'

export const Work = () => {
  const {id} = useParams()
  return (
    <PageTemplate 
      title='Work'>
      {id}
    </PageTemplate>
  )
}
