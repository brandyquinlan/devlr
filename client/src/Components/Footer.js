import React from 'react'
import Logo from '../assets/img/logo.png'

function Footer() {
  return (
    <footer className="footerPin d-flex flex-row align-items-center justify-content-center">
      <div className="ml-2">
        <img src={Logo} style={{ width: '50px' }} alt="devlr logo"></img>
      </div>
      <div className="ml-2">
        <p className="h6 m-0">
          devlr {'\u00A0'} | {'\u00A0'}{' '}
          <span className="small">Show your skills. Share your life.</span>
        </p>
        <p className="m-0 float-right">
        <span className="material-icons ml-2" style={{ fontSize: '16px' }}>
            link
          </span>
          <a
            href="https://github.com/brandyquinlan/devlr"
            target="_blank"
            className="underlineLink"
          >
            <small>GitHub</small>
          </a>
          <span className="material-icons ml-2" style={{ fontSize: '16px' }}>
            email
          </span>
          <a href="mailto:devlrteam@gmail.com" className="underlineLink">
            <small>Email</small>
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
