import {ThemeProvider} from 'styled-components'
import theme from 'shared/theme'
import {Navbar} from 'components/Navbar'
import {Home} from 'pages/Home'
import {Works} from 'pages/Works'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar routes={[
          {to: '/', name: 'Home'},
          {to: '/works', name: 'Works'},
        ]} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/works' element={<Works />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
