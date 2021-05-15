import React, { useRef } from 'react'
import NoExpandTab from '../NoExpandTab'
import SkillsEntryBox from './SkillsEntryBox'

function AddSkills(props) {
  const skillRef = useRef()
  return (
    <div>
      <NoExpandTab title="Add Skills">
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
              onClick={(e) => props.addSkill(e, skillRef.current.value)}
            >
              Add Skill
            </button>
          </div>
        </div>

        <div>
          <ul>
            {!props.newSkills ? (
              <li>Add some skills in the box above!</li>
            ) : (
              props.newSkills.map((skill, index) => (
                <li key={skill}>
                  {skill}{' '}
                  <button
                    type="button"
                    data-value={skill}
                    className="bg-danger"
                    onClick={(e) => props.removeSkill(e, index)}
                  >
                    x
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </NoExpandTab>
    </div>
  )
}

export default AddSkills
