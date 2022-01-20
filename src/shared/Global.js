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
  p {
    margin-bottom: 15px;
  }
  h1, h2 {
    margin-bottom: 15px;
    font-family: 'Victor Mono', sans-serif;
    font-style: italic;
  }
  h3 {
    padding: .8em 0;
  }
  ul {
    list-style-position: inside;
  }
  .markdown-body h1 {
    text-align: left;
  }
`
