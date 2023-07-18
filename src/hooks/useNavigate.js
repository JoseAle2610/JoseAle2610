import {useNavigate as useNavigateReactRouter, useLocation} from 'react-router-dom'
import { flushSync } from 'react-dom'

export const useNavigate = () => {
    const navigate = useNavigateReactRouter()
    const location = useLocation()
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

    return [handleNavigate, location]
}