import React from 'react'

function NavTab({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs mb-3">
      <li className="nav-item">
        <button
          type="button"
          onClick={() => handlePageChange('Posts')}
          className={currentPage === 'Posts' ? 'nav-link active' : 'nav-link'}
        >
          Posts
        </button>
      </li>
      <li className="nav-item">
        <button
          type="button"
          onClick={() => handlePageChange('Profile')}
          className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'}
        >
          Profile
        </button>
      </li>
      <li className="nav-item">
        <button
          type="button"
          onClick={() => handlePageChange('Network')}
          className={currentPage === 'Network' ? 'nav-link active' : 'nav-link'}
        >
          Network
        </button>
      </li>
    </ul>
  )
}
export default NavTab
