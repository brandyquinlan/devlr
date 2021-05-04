import React from 'react'

function Sidebar() {
  return (
    <div id="side-nav">
      <h2>devlr</h2>
      <ul className="list-group">
        <li className="m-3">
          <a href="/home">
            <i className="material-icons">home</i>
            Home
          </a>
        </li>
        <li className="m-3">
          <i className="material-icons">groups</i>
          Browse Users
        </li>
        <li className="m-3">
          <i className="material-icons">dashboard</i> Update Profile
        </li>
        <li className="m-3">
          <i className="material-icons">manage_accounts</i>
          Account
        </li>
        <li className="m-3">
          <a href="/logout">
            <i className="material-icons">keyboard_return</i>
            Logout
          </a>
        </li>
      </ul>
      <div className="d-flex flex-column align-items-center">
        <button
          type="button"
          className="btn btn-lg btn-secondary mt-3"
          id="newBtn"
        >
          New Post
        </button>
        <div className="circle" id="userPic"></div>
        <button
          type="button"
          className="btn btn-lg btn-secondary mt-3"
          id="appearanceBtn"
        >
          <span className="material-icons" style={{ fontSize: '24px' }}>
            palette
          </span>
          Appearance
        </button>
      </div>
    </div>
  )
}

export default Sidebar
