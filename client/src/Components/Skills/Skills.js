import React from 'react'

function Skills({ skill }) {
  return (
    <button className="btn btn-secondary m-1 language disabled" type="button">
      {skill}
    </button>
  )
}

export default Skills
