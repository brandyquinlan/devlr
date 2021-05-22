import React, { useRef } from 'react'

function AddSkills(props) {
  const skillRef = useRef()
  return (
    <div>
      <div className="tab gradient" style={{ border: 'none' }}>
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
              className="btn btn-secondary"
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
                    className="btn-secondary"
                    onClick={(e) => props.removeSkill(e, index)}
                  >
                    <span
                      className="material-icons remove"
                      style={{ fontSize: '20px' }}
                    >
                      clear
                    </span>
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AddSkills
