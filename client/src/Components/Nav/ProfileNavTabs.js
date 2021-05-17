import React from 'react'

function NavTab({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs mb-3">
      <li className="nav-item">
        <button
          type="button"
          onClick={() => handlePageChange('ProfilePosts')}
          className={currentPage === 'ProfilePosts' ? 'nav-link active' : 'nav-link'}
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
    </ul>
  )
}
export default NavTab
