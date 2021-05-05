import React from 'react'
import useViewport from '../utils/useViewport'
import Sidebar from '../Components/Sidenav/Sidenav'
import MobileSidebar from '../Components/Sidenav/MobileSidenav'
import Navbar from '../Components/Nav/Navbar'
import Tab from '../Components/Tab'

const Home = () => {
  const { width } = useViewport()
  const breakpoint = 768

  return (
    <div
      className="d-flex flex-row align-items-top justify-content-around"
      id="col1"
    >
      {width < breakpoint ? <MobileSidebar /> : <Sidebar />}
      <div className="d-flex flex-column align-items-left" id="col2">
        <Navbar />
      </div>
      <div className="d-flex flex-column align-items-right ml-4" id="col3">
        <Tab title="Featured Devs" />
        <Tab title="Ad" />
      </div>
    </div>
  )
}

export default Home
