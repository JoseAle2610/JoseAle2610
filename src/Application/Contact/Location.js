import styled from 'styled-components'

const Location = styled(({className, icon, href}) => (
  <div className={className}>
    <p>
      <i className='bi bi-geo-alt-fill'></i>
      Venezuela - Lara
    </p>
  </div>
))`
  padding: .5em; 
  border: 2px solid ${({theme}) => theme.color.primary};
  border-radius: ${({theme}) => theme.radius};
  color: ${({theme}) => theme.color.primary};
  margin: 1em 0;
`

export default Location
