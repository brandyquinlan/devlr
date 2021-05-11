import React from 'react'

function NavTab({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs mb-3">
      <li className="nav-item">
        <button
          type="button"
          onClick={() => handlePageChange('Activity')}
          className={currentPage === 'Acivity' ? 'nav-link active' : 'nav-link'}
        >
          Activity
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
          onClick={() => handlePageChange('Explore')}
          className={currentPage === 'Explore' ? 'nav-link active' : 'nav-link'}
        >
          Explore
        </button>
      </li>
    </ul>
  )
}
export default NavTab
