import React, { useRef } from 'react'
// import { Button, InputGroup } from 'react-bootstrap'
// import SkillsList from './SkillsLists'

function SkillsEntryBox({ newSkills2, addSkill, removeSkill }) {
  const skillRef = useRef()

  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Skill"
          aria-label="skill"
          aria-describedby="addSkill"
          ref={skillRef}
        ></input>
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="addSkill"
            onClick={(e) => addSkill(e, skillRef.current.value)}
          >
            Add Skill
          </button>
        </div>
      </div>
      <div>
        <ul>
          {!newSkills2 ? (
            <li>Add some skills in the box above!</li>
          ) : (
            newSkills2.map((skill, index) => (
              <li key={skill}>
                {skill}{' '}
                <button
                  type="button"
                  data-value={skill}
                  className="bg-danger"
                  onClick={(e) => removeSkill(e, index)}
                >
                  x
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
      {/* <div>
        <SkillsList newSkills={newSkills} removeSkill={removeSkill} />
      </div> */}
    </div>
  )
}

export default SkillsEntryBox
