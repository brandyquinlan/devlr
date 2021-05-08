import React from 'react'
import Tab from '../Tab'
import LangBtn from './LangBtn'

function Languages({ languages }) {
  return (
    <div>
      <Tab title="My Languages">
        {languages.map((lang) => (
          <LangBtn key={lang} lang={lang} />
        ))}
      </Tab>
    </div>
  )
}

export default Languages
