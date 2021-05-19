import { React, useState } from 'react'
import { Collapse } from 'react-bootstrap'
import PostBox from './PostBox'

function PostTab(props) {
  const [open, setOpen] = useState(!!props.expanded)
  const [icon, setIcon] = useState('expand_less')

  return (
    <div className="tab scroll gradient">
      <div className="d-flex flex-row align-items-center justify-content-between">
      <div>
        <a href={`/profile?user=${props.user}`}>
        <img src={props.avatarUrl} style={{ width: 40, height: 40 }} className="devPic float-left mr-3 mt-n2 mb-3"></img></a>
        <span className="h5">{props.title}</span></div>
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
