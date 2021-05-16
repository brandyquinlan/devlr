import React from 'react'
import Logo from '../assets/img/logo.png'

function Footer() {
  return (
    <footer className="bg-secondary p-3">
      <div className="float-left mx-3">
        <img src={Logo} style={{ width: '40px' }} alt="devlr logo"></img>
      </div>
      <div>
        <p>Show your skills, share your life.</p>
        <p>
          Connect with the devlr team on{' '}
          <a href="https://github.com/brandyquinlan/devlr" target="_blank">
            {' '}
            GitHub{' '}
          </a>
          or shoot us an <a href="mailto:devlrteam@gmail.com"> email </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
