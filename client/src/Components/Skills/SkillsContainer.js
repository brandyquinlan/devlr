import React from 'react'
import Tab from '../Tab'
import Skills from './Skills'

function SkillsContainer({ skills }) {
  return (
    <div>
      <Tab title="My Skills">
        {/* commenting these lines for now! as I updated the profile model for skills to be a string instead of an array */}
        {/* I went ahead and reverted the changes on the profile modal, but we need to talk about how we want to handle this */}
        {/* {skills.map((skill) => (
          <Skills skill={skill} />
        ))} */}
        <Skills skill={skills} />
      </Tab>
    </div>
  )
}

export default SkillsContainer
