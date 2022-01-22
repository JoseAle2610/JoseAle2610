import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import {PageTemplate} from 'templates/PageTemplate'
import 'github-markdown-css'

export const Work = () => {
  const {id} = useParams()
  const [markdown, setMarkdown] = useState('# Cargando...')
  useEffect(() => {
    let md = '';
    try {
      md = require(`works/${id}.md`)
    } catch (e) {
      setMarkdown('# Upss... este articulo no existe')
      return
    }
    fetch(md.default)
      .then(res => res.text())
      .then(setMarkdown)
  }, [id])
  return (
    <PageTemplate>
      <ReactMarkdown className='markdown-body'>{markdown}</ReactMarkdown>
    </PageTemplate>
  )
}
