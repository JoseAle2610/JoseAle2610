import styled from 'styled-components'
import device from '../assets/media'

const Container = styled.div`
  padding-top: 6px;
  padding-bottom: 6px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  width: 100%;

  //background-image: url(https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260);
  //background-size: 100% 100%;
  @media ${device.mobile}{
    max-width: 540px; 
  }
  @media ${device.tablet}{
    max-width: 720px;
  }
  @media ${device.tablet}{
    max-width: 960;
  }
  @media ${device.laptopL}{
    max-width: 1000px;
  }
  @media ${device.desktop}{
    max-width: 1400px;
  }
`

export default Container
