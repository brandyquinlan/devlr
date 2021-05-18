import { React, useState } from 'react'
import { Collapse } from 'react-bootstrap'
import PostBox from './PostBox'

function PostTab(props) {
  const [open, setOpen] = useState(!!props.expanded)
  const [icon, setIcon] = useState('expand_less')

  return (
    <div className="tab scroll gradient">
      <div className="d-flex flex-row align-items-center justify-content-between">
        <h5>{props.title}</h5>
        <button
          type="button"
          onClick={() => setOpen(!props.open)}
          aria-controls="children"
          aria-expanded={props.open}
        >
          <span className="material-icons">expand_less</span>
        </button>
      </div>
      <div className="separator mb-3"></div>
      <Collapse in={props.open}>
        <PostBox {...props} />
      </Collapse>
    </div>
  )
}

export default PostTab
