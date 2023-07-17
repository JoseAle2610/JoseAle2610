import styled from 'styled-components'

export const IconPage = styled.div`
  width: 100px;
  height: 100px;
  background-color: black;
  font-family: 'Roboto Mono';
  font-size: 40px;
  font-weight: 700;
  font-style: italic;
  line-height: 100px;
  vertical-align: middle;
  text-align: center;
  border-radius: 10px;
  color: white;
  &:before {
    content: '{js}';
  }
`
