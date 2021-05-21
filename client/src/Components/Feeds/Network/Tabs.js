import React from 'react'

export default function Tabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs mb-3">
      <li className="nav-item">
        <button
          type="button"
          onClick={() => handlePageChange('Followers')}
          className={currentPage === 'Posts' ? 'nav-link active' : 'nav-link'}
        >
          Followers
        </button>
      </li>
      <li className="nav-item">
        <button
          type="button"
          onClick={() => handlePageChange('Following')}
          className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'}
        >
          Following
        </button>
      </li>
    </ul>
  )
}
