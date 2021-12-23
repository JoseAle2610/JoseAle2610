import Header from './Application/Header'
import Skills from './Application/Skills'
import About from './Application/About'
import Portfolio from './Application/Portfolio'
import Contact from './Application/Contact'
import {ThemeProvider} from 'styled-components'
import theme from './shared/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Skills />
      <About /> 
      <Portfolio />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
