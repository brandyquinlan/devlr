import React from 'react'
import Tab from '../Tab'
import LangBtn from './LangBtn'

function Languages({ languages }) {
  return (
    <div>
      <Tab title="My Languages">
        {/* I went ahead and reverted the changes on the profile modal, but we need to talk about how we want to handle this */}
        {/* {languages.map((lang) => (
          <LangBtn key={lang} lang={lang} />
        ))} */}
        {languages}
      </Tab>
    </div>
  )
}

export default Languages
