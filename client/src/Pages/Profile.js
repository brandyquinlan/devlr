import React from 'react'
import Tab from '../Components/Tab'
import useViewport from '../utils/useViewport'
import Sidenav from '../Components/Sidenav/Sidenav'
import MobileSidenav from '../Components/Sidenav/MobileSidenav'
import ProfileNavbar from '../Components/Nav/ProfileNavbar'

function Profile() {
  const { width } = useViewport()
  const breakpoint = 768

  return (
    <div className="container">
      <div
        className="d-flex flex-row align-items-top justify-content-around"
        id="col1"
      >
        {width < breakpoint ? <MobileSidenav /> : <Sidenav />}
        <div className="d-flex flex-column align-items-left" id="col2">
          <ProfileNavbar />
        </div>
        <div className="d-flex flex-column align-items-right ml-4" id="col3">
          <Tab title="Featured Devs" />
          <Tab title="Ad" />
        </div>
      </div>
    </div>
  )
}

export default Profile
