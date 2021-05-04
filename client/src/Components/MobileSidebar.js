import React from 'react'

function MobileSidebar() {
  return (
    <div id="side-nav">
      <h2>devlr</h2>
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
    </div>
  )
}

export default MobileSidebar
