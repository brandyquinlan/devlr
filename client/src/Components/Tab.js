import React from 'react'

function Tab({ title, children }) {
  return (
    <div className="tab gradient">
      <div className="d-flex flex-row align-items-center justify-content-between">
        <h5>{title}</h5>
        <span className="material-icons">expand_more</span>
      </div>
      <div className="separator mb-3"></div>
      <div>{children}</div>
    </div>
  )
}

export default Tab
