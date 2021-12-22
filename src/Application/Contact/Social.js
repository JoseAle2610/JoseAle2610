import styled from 'styled-components'

const Social = styled(({className, icon, href}) => (
  <a href={href} target='_blank' className={className}>
    <i className={`bi bi-${icon}`}></i>
  </a>
))`
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color.primary};
  font-size: 32px;
  margin-right: 10px;
  i {
    display: block;
    text-align: center;
    line-height: 1.5;
    color: #fff;
  }
`

export default Social
