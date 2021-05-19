import React from 'react'
import Logo from '../assets/img/logo.png'

function Footer() {
  return (
    <footer className="footer d-flex flex-row align-items-center justify-content-center py-2 mt-4">
      <div className="ml-2">
        <img src={Logo} style={{ width: '50px' }} alt="devlr logo"></img>
      </div>
      <div className="ml-2">
        <p className="h6 m-0">{'\u00A0'} {'\u00A0'} devlr {'\u00A0'} | {'\u00A0'} Show your skills, share your life</p>
        <small>
          Connect with the devlr team on{' '}
          <a href="https://github.com/brandyquinlan/devlr" target="_blank" className="underlineLink">
            {' '}
            GitHub{' '}
          </a>
          or shoot us an <a href="mailto:devlrteam@gmail.com" className="underlineLink"> email </a>
        </small>
      </div>
    </footer>
  )
}

export default Footer
