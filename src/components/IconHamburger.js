import styled from 'styled-componentsn'

export const IconBar = styled(({className}) => (
  <div className={className}>
    <span></span>
    <span></span>
    <span></span>
  </div>
))`
  span {
	  display: block;
	  width: 22px;
	  height: 2px;
	  border-radius: 1px;
    background-color: black;
  }
  span + span {
    margin-top: 4px;
  }
`
