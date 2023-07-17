import styled from 'styled-components'

export const FullContainer = styled.div`
  height: 100vh;  
  border: 10px solid black;
  overflow: hidden scroll;
`

export const FullContainerBackground = styled.main`
  display: flex;
  align-items: center;
  height: 100vh;  
  background-image:
    linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)),
  url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom 30% left ;
  border: 10px solid black;
  color: white;
  h1{
    font-size: 70px;
  }
`
