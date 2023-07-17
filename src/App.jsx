import {ThemeProvider} from 'styled-components'
import theme from '@/components/theme'
import {Navbar} from '@/components/Navbar'
import {Home} from '@/pages/Home'
import {Works} from '@/pages/Works'
import {About} from '@/pages/About'
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
          {to: '/', name: 'Inicio'},
          // {to: '/resume', name: 'Resumen'},
          {to: '/works', name: 'Trabajos'},
          {to: '/about', name: 'Acerce de'},
        ]} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/works'  element={<Works />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/contact' element={<Contact />} /> */}
          {/* <Route path='/resume' element={<Resume />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
