import React from 'react'

function NavTab({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs mb-3">
      <li className="nav-item">
        <a
          href="#activity"
          onClick={() => handlePageChange('Activity')}
          className={currentPage === 'Acivity' ? 'nav-link active' : 'nav-link'}
        >
          Activity
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#profile"
          onClick={() => handlePageChange('Profile')}
          className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'}
        >
          Profile
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#explore"
          onClick={() => handlePageChange('Explore')}
          className={currentPage === 'Explore' ? 'nav-link active' : 'nav-link'}
        >
          Explore
        </a>
      </li>
    </ul>
  )
}
export default NavTab
