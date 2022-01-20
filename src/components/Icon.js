export const Icon = ({from, icon}) => {
  const prefix = from !== 'devicon' ? 'bi bi-' : 'devicon'
  return (
    <i className={prefix + icon}></i>
  )
}

Icon.defaultProps = {
  from: 'devicon'
}
