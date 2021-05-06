import React from 'react'
import Btn from '../Btn'

function User() {
  return (
    <div className="d-flex flex-column align-items-center">
      <Btn id="mobileBtn">
        <span className="material-icons" style={{ fontSize: '26px' }}>
          post_add
        </span>
      </Btn>
      <Btn id="mobileBtn">
        <span className="material-icons" style={{ fontSize: '26px' }}>
          palette
        </span>
      </Btn>
    </div>
  )
}

export default User
