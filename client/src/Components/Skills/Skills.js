import React from 'react'

function Skills({ skill }) {
  return (
    <button
      className="btn btn-secondary mx-2 my-3 language disabled"
      type="button"
    >
      {skill}
    </button>
  )
}

export default Skills
