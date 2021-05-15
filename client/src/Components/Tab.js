import { React, useState } from 'react'
import { Button as button, Collapse, Row, Col } from 'react-bootstrap'

function Tab({ title, children, projects }) {
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
      <Collapse in={open}>
        <div id="children">{children}</div>
      </Collapse>
      {projects
        ? projects.map((project) => (
            <Row key={project.name}>
              <Col key={project.name}>
                <h5>{project.name}</h5>

                <p>
                  {project.description
                    ? project.description
                    : 'The project does not have description yet'}
                </p>
                <a href={project.url} target="_blank" rel="noreferrer">
                  Project repo
                </a>
                <hr />
              </Col>
            </Row>
          ))
        : null}
    </div>
  )
}

export default Tab
