import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Tab from '../Tab'
import Skills from './Skills'
import SkillsLangModal from '../Modals/SkillsLangModal'

function SkillsContainer({ skills }) {
  const [skillsLangsModalShow, setSkillsLangsModalShow] = React.useState(false)

  return (
    <div>
      <Tab title="My Skills" expanded>
        {skills.map((skill) => (
          <Skills skill={skill} key={skill} />
        ))}
        <br></br>
        <Button
          variant="secondary"
          size="sm"
          className="newBtn"
          onClick={() => setSkillsLangsModalShow(true)}
        >
          Add/Update Skills
        </Button>
        <SkillsLangModal
          show={skillsLangsModalShow}
          onHide={() => setSkillsLangsModalShow(false)}
        />
      </Tab>
    </div>
  )
}

export default SkillsContainer
