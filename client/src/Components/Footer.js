import React from 'react'
import Logo from '../assets/img/logo.png'

function Footer() {
  return (
    <footer className="d-flex flex-row align-items-center justify-content-center py-2 mt-4">
      <div>
        <img src={Logo} style={{ width: '50px' }} alt="devlr logo"></img>
      </div>
      <div className="ml-2">
        <p className="h6 m-0">Show your skills, share your life.</p>
        <small>
          Connect with the devlr team on{' '}
          <a href="https://github.com/brandyquinlan/devlr" target="_blank" className="footerLink">
            {' '}
            GitHub{' '}
          </a>
          or shoot us an <a href="mailto:devlrteam@gmail.com" className="footerLink"> email </a>
        </small>
      </div>
    </footer>
  )
}

export default Footer
