import React from 'react'
import { Button } from 'react-bootstrap'

function User() {
  return (
    <div className="d-flex flex-column align-items-center">
      <Button type="button" variant="secondary" id="mobileBtn">
        <span className="material-icons" style={{ fontSize: '26px' }}>
          post_add
        </span>
      </Button>
      <Button type="button" variant="secondary" id="mobileBtn">
        <span className="material-icons" style={{ fontSize: '26px' }}>
          palette
        </span>
      </Button>
    </div>
  )
}

export default User
