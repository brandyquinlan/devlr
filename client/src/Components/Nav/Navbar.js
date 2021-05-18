import React, { useState } from 'react'
import NavTabs from './NavTabs'
import Posts from '../Feeds/Posts'
import Profile from '../Feeds/Profile'
import Network from '../Feeds/Network'

function Navbar({ projects, home, followers, following }) {
  const [page, setPage] = useState('Posts')

  function handlePageChange(newPage) {
    setPage(newPage)
  }

  function renderPage() {
    if (page === 'Network') {
      return <Network followers={followers} following={following} />
    }
    if (page === 'Profile') {
      return <Profile projects={projects} />
    }
    return <Posts home={home} />
  }

  return (
    <>
      <NavTabs
        currentPage={page}
        handlePageChange={handlePageChange}
        projects={projects}
      />
      {renderPage()}
    </>
  )
}

export default Navbar
