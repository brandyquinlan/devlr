import React from 'react'
import User from '../User/User'
import Logo from '../../assets/img/logo.png'

function Sidenav() {
  return (
    <div id="side-nav">
      <div className="d-flex flex-column align-items-start justify-content-start">
        <img src={Logo} style={{ width: '60px' }} alt="devlr logo"></img>
        <h2 className="mt-3">devlr</h2>
      </div>
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
          <i className="material-icons">dashboard</i>Update Profile
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
