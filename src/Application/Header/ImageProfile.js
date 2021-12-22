import styled, {keyframes} from 'styled-components'

const ImageAnimation = keyframes`
  0% {    
    box-shadow: 0 0 0 15px rgba(255,255,255, .3),
    0 0 0 5px #fff;
  }
  20% {
    box-shadow: 0 0 0 15px rgba(255,255,255, .3),
    0 0 0 8px #fff;
  }
  50% {
     box-shadow: 0 0 0 20px rgba(255,255,255, .3),
    0 0 0 8px #fff;
  }
  100% {
     box-shadow: 0 0 0 15px rgba(255,255,255, .3),
    0 0 0 5px #fff;
  }
`

const ImageProfile = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  animation-name: ${ImageAnimation};
  animation-duration: 3s;
  animation-iteration-count: infinite;
  margin: 2em;
`
export default ImageProfile
