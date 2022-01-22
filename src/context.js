import {createContext, useMemo, useContext} from 'react'
import data from 'config'

export const InfoContext= createContext(data)

export const useInfo = () => {
  const info = useContext(InfoContext)
  const infoMemo = useMemo(() => ({...info}), [info])
  return infoMemo
}
