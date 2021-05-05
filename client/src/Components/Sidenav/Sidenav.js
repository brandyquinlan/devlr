import React from 'react'
import User from '../User/User'

function Sidenav() {
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
      <User />
    </div>
  )
}

export default Sidenav
