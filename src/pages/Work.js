import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import {PageTemplate} from 'templates/PageTemplate'
import md from './work.md'

export const Work = () => {
  const [markdown, setMarkdown] = useState('# hola')
  useEffect(() => {
    fetch(md)
      .then(res => res.text())
      .then(setMarkdown)
  }, [])
  return (
    <PageTemplate>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </PageTemplate>
  )
}
