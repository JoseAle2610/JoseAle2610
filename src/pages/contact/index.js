import Title from '../../components/title'
import styled from 'styled-components'
import Container from '../../components/container'

const Contact = ({className}) => (
  <Container className={className}>
    <Title>Contacto</Title>  
    <form>
      <input type='text' placeholder='Tu nombre' style={{marginRight: '8px'}}/>
      <input type='email' placeholder='Tu Email' />
      <textarea></textarea>
      <button>Enviar</button>
    </form>
  </Container>
)

const StyledContact = styled(Contact)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  form {
    max-width: 500px;
    margin: 0 auto;
  }
  textarea, input{
    margin-bottom: 10px;
    border-radius: 10px;
    border-color: hsl(0,0%,70%); 
  }
  textarea {
    display: block;
    width: 100%;
  }
  input {
    padding: 8px;
  }
  button {
    display: block;
    width: 100%;
    background-color: #29a8cb;
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 8px;
  }
`

export default StyledContact
