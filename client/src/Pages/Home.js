import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import Tab from '../Components/Tab'

function Home() {
  return (
    <div
      className="d-flex flex-row align-items-top justify-content-around"
      id="col1"
    >
      <Sidebar />
      <div className="d-flex flex-column align-items-left" id="col2">
        <Navbar />
      </div>
      <div className="d-flex flex-column align-items-right">
        <div className="ml-4" id="col3">
          <Tab title="Featured Devs" />
          <Tab title="Ad" />
        </div>
      </div>
    </div>
  )
}

export default Home
