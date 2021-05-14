import React, { useState, useContext } from 'react'
import NavTabs from './NavTabs'
import Activity from '../Feeds/Activity'
import Profile from '../Feeds/Profile'
import Explore from '../Feeds/Explore'

function Navbar({ posts, createComment, incrementLike, createPost }) {
  const [page, setPage] = useState('Activity')

  function handlePageChange(newPage) {
    setPage(newPage)
  }

  function renderPage() {
    if (page === 'Explore') {
      return <Explore />
    }
    if (page === 'Profile') {
      return <Profile />
    }
    return (
      <Activity
        posts={posts}
        createPost={createPost}
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
