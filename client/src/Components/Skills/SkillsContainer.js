import React from 'react'
import Tab from '../Tab'
import Skills from './Skills'

function SkillsContainer({ skills }) {
  return (
    <div>
      <Tab title="My Skills">
        {skills.map((skill) => (
          <Skills skill={skill} />
        ))}
      </Tab>
    </div>
  )
}

export default SkillsContainer
