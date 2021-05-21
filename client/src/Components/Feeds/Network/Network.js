import React, { useState } from 'react'
import Tabs from './Tabs'
import Following from './Following'
import Followers from './Followers'

export default function Network() {
  const [page, setPage] = useState('Posts')

  function handlePageChange(newPage) {
    setPage(newPage)
  }

  function renderPage() {
    if (page === 'Following') {
      return <Following />
    }

    return <Followers />
  }

  return (
    <>
      <Tabs currentPage={page} handlePageChange={handlePageChange} />
      {renderPage()}
    </>
  )
}
