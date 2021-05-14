import { React, useState } from 'react'
import { Button as button, Collapse } from 'react-bootstrap'

function Tab({ title, children }) {
  const [open, setOpen] = useState(true)
  const [icon, setIcon] = useState('expand_less')

  return (
    <div className="tab scroll gradient">
      <div className="d-flex flex-row align-items-center justify-content-between">
        <h5>{title}</h5>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-controls="children"
          aria-expanded={open}
        >
          <span className="material-icons">expand_less</span>
        </button>
      </div>
      <div className="separator mb-3"></div>
      <Collapse in={!open}>
        <div id="children">{children}</div>
      </Collapse>
    </div>
  )
}

export default Tab
