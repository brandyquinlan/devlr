import React from 'react'

function Btn({ id, text, children }) {
  return (
    <div>
      <button type="button" className="btn btn-lg btn-secondary mt-3" id={id}>
        {children}
        {text}
      </button>
    </div>
  )
}

export default Btn
