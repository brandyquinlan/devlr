import React from 'react'

function NoExpandTab({ title, children }) {
  return (
    <div className="tab scroll gradient">
      <div className="d-flex flex-row align-items-center justify-content-between">
        <h5>{title}</h5>
      </div>
      <div className="separator mb-3"></div>
      <div id="children">{children}</div>
    </div>
  )
}

export default NoExpandTab
