import styled from 'styled-components'
import { slideBottomAnimation } from './Animation'

const flex = ({flex, justify, align}) => {
  if (!flex) return
  let css = `display: flex;flex-wrap:wrap;`
  if (justify.trim()) {
    css  += `justify-content: ${justify};`
  }
  if (align.trim()) {
    css += `align-items: ${align};`
  } 
  return css
}

const py = ({py}) => {
  if (!py) return
  return `
  padding-top: ${py};
  padding-bottom: ${py};
  `
}

const Container = styled.div`
  width: 90%;
  max-width: 1024px;
  margin: 0 auto;
  ${(props) => flex(props)}
  ${(props) => py(props)}
`

export default Container

export const SectionContainer = styled(Container)`
  animation: ${slideBottomAnimation} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  padding: 60px 0;
  h1 {
    text-align: center;
  }
`
