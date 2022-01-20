import {useEffect, useState} from 'react'
import ReactMarkdown from 'react-markdown'
import {PageTemplate} from 'templates/PageTemplate'
import md from './work.md'
import 'github-markdown-css'

export const Work = () => {
  const [markdown, setMarkdown] = useState('# Cargando...')
  useEffect(() => {
    fetch(md)
      .then(res => res.text())
      .then(setMarkdown)
  }, [])
  return (
    <PageTemplate>
      <ReactMarkdown className='markdown-body'>{markdown}</ReactMarkdown>
    </PageTemplate>
  )
}
