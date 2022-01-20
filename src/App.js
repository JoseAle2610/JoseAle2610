import {ThemeProvider} from 'styled-components'
import theme from 'shared/theme'
import {Navbar} from 'components/Navbar'
import {Home} from 'pages/Home'
import {Works} from 'pages/Works'
import {Work} from 'pages/Work'
import {About} from 'pages/About'
import {Contact} from 'pages/Contact'
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
          {to: '/about', name: 'About'},
          {to: '/contact', name: 'Contact'}
        ]} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/works'>
            <Route path='' element={<Works />} />
            <Route path=':id' element={<Work />} />
          </Route>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
