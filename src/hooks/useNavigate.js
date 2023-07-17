import {useNavigate as useNavigateReactRouter} from 'react-router-dom'
import { flushSync } from 'react-dom'

export const useNavigate = () => {
    const navigate = useNavigateReactRouter()
    const handleNavigate = (e) => {
      e.preventDefault()
      if (!document.startViewTransition){
        navigate(e.target.getAttribute('href'))
        console.log('aqui estoy')
      }
      document.startViewTransition(() => {
        flushSync(() => navigate(e.target.getAttribute('href')))
      })
    }

    return [handleNavigate]
}