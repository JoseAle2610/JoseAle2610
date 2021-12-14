import styled from 'styled-components'

const NavContainer = styled.aside`
  margin-left: .4em;
  padding: 10px;
  width: 200px;
  color: #fff;
  border-radius: 5px;
  height: 100%;
  //background-color: #333;
  background-image: linear-gradient(#29a8cb, #159583);
  display: flex;
  flex-direction: column;
  justify-content: flex-center;
`

const NavItem = styled.div`
  display: flex;
  width: 100%;
  height: 3em;
  border-radius: 5px;
  margin-bottom: 5px;
  align-items: center;
  padding-left: 15px;
  &:hover {
    background-color: rgba(255,255,255, .3);
    color: #fff;
  }
  i {
    font-size: 30px;
    margin-right: 15px;
  }
`
const Sidebar = () => (
  <NavContainer>
    <NavItem><i className="bi bi-house" />Home</NavItem>
    <NavItem><i className="bi bi-boxes" />My Skills</NavItem>
    <NavItem><i className="bi bi-braces" />Proyects</NavItem>
    <NavItem><i className="bi bi-stickies" />Blog</NavItem>
    <NavItem><i className="bi bi-telephone" />Contact</NavItem>
  </NavContainer>
)

export default Sidebar 
