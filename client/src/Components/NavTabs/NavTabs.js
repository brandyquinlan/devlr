const NavTabs = (props) => {
  return (
    <ul className="nav nav-tabs mb-3">
      <li className="nav-item">
        <a
          href="#activity"
          onClick={() => props.handlePageChange('Activity')}
          className={
            props.currentPage === 'Acivity' ? 'nav-link active' : 'nav-link'
          }
        >
          Activity
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#profile"
          onClick={() => props.handlePageChange('Profile')}
          className={
            props.currentPage === 'Profile' ? 'nav-link active' : 'nav-link'
          }
        >
          Profile
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#explore"
          onClick={() => props.handlePageChange('Explore')}
          className={
            props.currentPage === 'Explore' ? 'nav-link active' : 'nav-link'
          }
        >
          Explore
        </a>
      </li>
    </ul>
  );
};

export default NavTabs;
