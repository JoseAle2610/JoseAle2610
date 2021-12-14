import styled from 'styled-components'

const Button = styled.button`
  font-family: sans-serif;
  letter-spacing: 2px;
  text-decoration: none;
  color: #000;
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipularion;

  &:active {
    box-shadow: 0px 0px 0px 0px;
    top: 5px;
    left: 5px; 
  }
`

export default Button
