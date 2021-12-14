import {Fragment} from 'react'
import Navbar from './components/navbar'
import Home from './pages/home'
import About from './pages/about'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'

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
