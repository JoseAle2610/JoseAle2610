import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: sans-serif;
	  color: hsl(0,0%,35%);
  }
  *, *:before, *:after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }
`
