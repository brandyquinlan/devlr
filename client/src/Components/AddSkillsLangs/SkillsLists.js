import React from 'react'

function SkillsLists({ newSkills, removeSkill }) {
  return (
    <>
      <div>
        <ul>
          {!newSkills ? (
            <li>Add some skills in the box above!</li>
          ) : (
            newSkills.map((skill, index) => (
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
    </>
  )
}

export default SkillsLists
