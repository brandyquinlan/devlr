import React from 'react'

function LangBtn({ lang }) {
  return (
    <button
      className="btn btn-secondary mx-2 my-3 language disabled"
      type="button"
    >
      {lang}
    </button>
  )
}

export default LangBtn
