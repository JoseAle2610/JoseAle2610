import styled from 'styled-components'

export const Detail = styled(({className, title, value}) => (
  <div className={className}>
    <label>{title}</label>
    <span>{value}</span>
  </div>
))`
  margin-bottom: .3em;
  label {
    color: ${(props) => props.theme.color.primary};
    display: inline-block;
    min-width: 200px;
  }
`

export const Details = styled(({className, title, children}) => (
  <div className={className}>
    <h4>{title}</h4>
    {children}
  </div>
))`
  h4 {
    padding: 1.3em 0;
  }
`
