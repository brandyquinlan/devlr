import React, { useState, useContext } from 'react'
import NavTabs from './NavTabs'
import Activity from '../Feeds/Activity'
import Profile from '../Feeds/Profile'
import Explore from '../Feeds/Explore'

function Navbar({ posts, createComment, incrementLike, projects }) {
  const [page, setPage] = useState('Activity')

  function handlePageChange(newPage) {
    setPage(newPage)
  }

  function renderPage() {
    if (page === 'Explore') {
      return <Explore />
    }
    if (page === 'Profile') {
      return <Profile projects={projects} />
    }
    return (
      <Activity
        posts={posts}
        createComment={createComment}
        incrementLike={incrementLike}
      />
    )
  }

  return (
    <>
      <NavTabs currentPage={page} handlePageChange={handlePageChange} />
      {renderPage()}
    </>
  )
}

export default Navbar
