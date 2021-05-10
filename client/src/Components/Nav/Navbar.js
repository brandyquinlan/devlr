import React, { useState, useEffect, useContext } from 'react'
import { StoreContext } from '../../utils/GlobalState'
import API from '../../utils/API'
import NavTabs from './NavTabs'
import Activity from '../Feeds/Activity'
import Profile from '../Feeds/Profile'
import Explore from '../Feeds/Explore'

function Navbar() {
  const [store, dispatch] = useContext(StoreContext)
  const [page, setPage] = useState('About')

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
    return <Activity />
  }

  useEffect(() => {
    API.getUserInfo()
      .then(({ data }) => {
        const [user, profile] = data
        dispatch({ type: 'set user', payload: user })
        dispatch({ type: 'set profile', payload: profile })
      })
      .catch((err) => console.error('error in state set, navbar.js', err))
  }, [])

  return (
    <>
      <NavTabs currentPage={page} handlePageChange={handlePageChange} />
      {renderPage()}
    </>
  )
}

export default Navbar
