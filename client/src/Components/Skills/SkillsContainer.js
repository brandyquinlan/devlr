import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Tab from '../Tab'
import Skills from './Skills'
import SkillsModal from '../Modals/SkillsModal'

function SkillsContainer({ skills, home }) {
  const [skillsModalShow, setSkillsModalShow] = React.useState(false)

  return (
    <div>
      <Tab title="My Skills" expanded>
        {skills.map((skill) => (
          <Skills skill={skill} key={skill} />
        ))}
        <br></br>
        {home ? (
          <div>
            <Button
              variant="secondary"
              size="sm"
              className="newBtn"
              onClick={() => setSkillsModalShow(true)}
            >
              Add/Update Skills
            </Button>
            <SkillsModal
              show={skillsModalShow}
              onHide={() => setSkillsModalShow(false)}
            />
          </div>
        ) : (
          ''
        )}
      </Tab>
    </div>
  )
}

export default SkillsContainer
