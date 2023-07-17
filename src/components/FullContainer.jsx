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
  linear-gradient(rgba(0,0,0,.9), rgba(0,0,0,.9)),
  url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom 30% left ;
  /* filter: blur(8px); */
  border: 10px solid black;
  color: white;
  h1{
    font-size: 70px;
  }
`
