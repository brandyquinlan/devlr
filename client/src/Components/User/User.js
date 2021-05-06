import React from 'react'
import Btn from '../Btn'

function User() {
  return (
    <div className="d-flex flex-column align-items-center">
      <Btn id="newBtn" text="New Post" />
      <div className="circle" id="userPic"></div>
      <Btn id="appearanceBtn" text="Appearance">
        <span className="material-icons" style={{ fontSize: '26px' }}>
          palette
        </span>
      </Btn>
    </div>
  )
}

export default User
