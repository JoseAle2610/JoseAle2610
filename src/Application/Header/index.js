import Navbar from './Navbar'
import Home from './Home'
import Background from '../../shared/Background'

const Header =  () => {
  return (
    <header style={{position: 'relative', color: '#fff'}}>
    <Navbar />
      <Home />
      <Background></Background>
  </header>
  )
}

export default Header
