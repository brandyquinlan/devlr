import React from 'react'
import { Button } from 'react-bootstrap'

function User() {
  return (
    <div className="d-flex flex-column align-items-center">
      <Button variant="secondary" size="lg" id="newBtn">
        <span className="material-icons" style={{ fontSize: '26px' }}>
          post_add
        </span>
        New Post
      </Button>
      <div className="circle" id="userPic"></div>
      <Button variant="secondary" size="lg" id="appearanceBtn">
        <span className="material-icons" style={{ fontSize: '26px' }}>
          palette
        </span>
        Appearance
      </Button>
    </div>
  )
}

export default User
