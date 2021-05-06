import React from 'react'
import Tab from '../Tab'
import LangBtn from './LangBtn'

function Languages() {
  // get array of languages stored in DB
  // for now here is a dummy array:

  const languages = ['JavaScript', 'HTML5', 'CSS3']

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
