import {Fragment} from 'react'
import Navbar from './components/navbar.jsx'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Portfolio from './pages/portfolio.jsx'
import Contact from './pages/contact.jsx'

function App() {
  return (
    <Fragment>
        <Navbar />
        <Home /> 
        <About />
        <Portfolio />
        <Contact />
    </Fragment>
  );
}

export default App;
