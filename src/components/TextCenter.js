import styled from 'styled-components'

export const TextCenter = styled.div`
  width: 70%;
  text-align: center;
  margin: 0 auto 40px;
  p {
    letter-spacing: .8px;
    line-height: 25px;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`
