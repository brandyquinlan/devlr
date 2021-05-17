import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Tab from '../Tab'

function Projects({ projects, profile }) {
  return (
    <div>
      <Tab title="My Pinned Projects" expanded>
        {projects?.length === 0 || !projects ? (
          <div>
            <p>
              You have not pinned any projects yet! Visit your{' '}
              <a
                href={`https://github.com/${profile.githubUsername}`}
                target="_blank"
              >
                GitHub profile
              </a>{' '}
              to pin special projects.
            </p>
            <p>
              If you are not sure how to pin a project, visit this{' '}
              <a
                href="https://docs.github.com/en/github/setting-up-and-managing-your-github-profile/pinning-items-to-your-profile"
                target="_blank"
              >
                tutorial
              </a>
              .
            </p>
          </div>
        ) : (
          projects.map((project) => (
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
        )}
      </Tab>
    </div>
  )
}

export default Projects
