import React from 'react'
import { Button } from 'react-bootstrap'
import Tab from '../Tab'
import LangBtn from './LangBtn'
import LangsModal from '../Modals/LangsModal'

function Languages({ languages, home }) {
  const [langModalShow, setLangModalShow] = React.useState(false)

  return (
    <div>
      <Tab title="My Languages" expanded>
        {languages.map((lang) => (
          <LangBtn key={lang} lang={lang} />
        ))}
        <br></br>
        {home ? (
          <div>
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
    </div>
        ) : '' } 
      </Tab>
    </div>
  )
}

export default Languages
