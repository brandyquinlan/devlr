import React from 'react'
import MobileUser from '../User/MobileUser'
import Logo from '../../assets/img/logo.png'

function MobileSidenav() {
  return (
    <div id="mobile-side-nav">
      <img src={Logo} style={{ width: '50px' }} alt="devlr logo"></img>
      <ul className="list-group">
        <li className="m-3">
          <a href="/home">
            <i className="material-icons">home</i>
          </a>
        </li>
        <li className="m-3">
          <i className="material-icons">groups</i>
        </li>
        <li className="m-3">
          <i className="material-icons">dashboard</i>
        </li>
        <li className="m-3">
          <i className="material-icons">manage_accounts</i>
        </li>
        <li className="m-3">
          <a href="/logout">
            <i className="material-icons">keyboard_return</i>
          </a>
        </li>
      </ul>
      <MobileUser />
    </div>
  )
}

export default MobileSidenav
