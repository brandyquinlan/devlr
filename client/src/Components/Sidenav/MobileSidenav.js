import React, { useContext } from 'react'
import { StoreContext } from '../../utils/GlobalState'
import MobileUser from '../User/MobileUser'
import BrowseUsersModal from '../Modals/BrowseUsersModal'
import UpdateProfileModal from '../Modals/UpdateProfileModal'
import Logo from '../../assets/img/logo.png'

function MobileSidenav() {
  const [store, dispatch] = useContext(StoreContext)
  const [usersModalShow, setUsersModalShow] = React.useState(false)
  const [profileModalShow, setProfileModalShow] = React.useState(false)

  return (
    <div id="mobile-side-nav">
      <img src={Logo} style={{ width: '50px' }} alt="devlr logo"></img>
      <ul className="list-group">
        <li>
          <a href="/home">
            <i className="material-icons">home</i>
          </a>
        </li>
        <li>
          <button type="button" onClick={() => setUsersModalShow(true)}>
            <i className="material-icons">groups</i>
          </button>
        </li>
        <BrowseUsersModal
          show={usersModalShow}
          onHide={() => setUsersModalShow(false)}
        />
        <li>
          <button type="button" onClick={() => setProfileModalShow(true)}>
            <i className="material-icons">dashboard</i>
          </button>
        </li>
        <UpdateProfileModal
          show={profileModalShow}
          onHide={() => setProfileModalShow(false)}
        />
        <li>
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault()
              window.location.href = '/home/settings'
            }}
          >
            <i className="material-icons">manage_accounts</i>
          </button>
        </li>
        <li>
          <button
            type="button"
            href="/"
            onClick={() => dispatch({ type: 'logout' })}
          >
            <i className="material-icons">keyboard_return</i>
          </button>
        </li>
      </ul>
      <MobileUser />
    </div>
  )
}

export default MobileSidenav
