import React, { useState, useContext } from 'react'
import ProfileNavTabs from './ProfileNavTabs'
import Posts from '../Feeds/Posts'
import Profile from '../Feeds/Profile'
import Network from '../Feeds/Network'

function ProfileNavbar({ projects }) {
  const [page, setPage] = useState('Posts')

  function handlePageChange(newPage) {
    setPage(newPage)
  }

  function renderPage() {
    if (page === 'Network') {
      return <Network />
    }
    if (page === 'Profile') {
      return <Profile />
    }
    return <Posts />
  }

  return (
    <>
      <ProfileNavTabs
        currentPage={page}
        handlePageChange={handlePageChange}
        projects={projects}
      />
      {renderPage()}
    </>
  )
}

export default ProfileNavbar
