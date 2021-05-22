import React from 'react'

function LangBtn({ lang }) {
  return (
    <button className="btn btn-secondary m-1 language disabled" type="button">
      {lang}
    </button>
  )
}

export default LangBtn
