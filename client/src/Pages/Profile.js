import React from 'react'
import Tab from '../Components/Tab'
import useViewport from '../utils/useViewport'
import Sidenav from '../Components/Sidenav/Sidenav'
import MobileSidenav from '../Components/Sidenav/MobileSidenav'
import Navbar from '../Components/Nav/Navbar'
import NoExpandTab from '../Components/NoExpandTab'
import FeaturedDevs from '../Components/FeaturedDevs/FeaturedDevs'

function Profile() {
  const { width } = useViewport()
  const breakpoint = 875

  return (
    <div className="container">
      <div
        className="d-flex flex-row align-items-top justify-content-around"
        id="col1"
      >
        {width < breakpoint ? <MobileSidenav /> : <Sidenav />}
        <div className="d-flex flex-column align-items-left" id="col2">
          <Navbar />
        </div>
        <div className="d-flex flex-column align-items-right ml-4" id="col3">
          <NoExpandTab title="Featured Devs">
            <FeaturedDevs />
          </NoExpandTab>
          <Tab title="Ad" />
        </div>
      </div>
    </div>
  )
}

export default Profile
