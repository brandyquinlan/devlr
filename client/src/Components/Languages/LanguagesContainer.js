import React from 'react'
import { Button } from 'react-bootstrap'
import Tab from '../Tab'
import LangBtn from './LangBtn'
import LangsModal from '../Modals/LangsModal'

function Languages({ languages }) {
  const [langModalShow, setLangModalShow] = React.useState(false)

  return (
    <div>
      <Tab title="My Languages">
        {languages.map((lang) => (
          <LangBtn key={lang} lang={lang} />
        ))}
        <br></br>
        <Button
          variant="secondary"
          size="sm"
          className="newBtn"
          onClick={() => setLangModalShow(true)}
        >
          Add/Update Languages
        </Button>
        <LangsModal
          show={langModalShow}
          onHide={() => setLangModalShow(false)}
        />
      </Tab>
    </div>
  )
}

export default Languages
