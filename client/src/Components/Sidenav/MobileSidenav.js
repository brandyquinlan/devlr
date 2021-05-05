import React from 'react'
import MobileUser from '../User/MobileUser'
import BrowseUsersModal from '../Modals/BrowseUsersModal'
import UpdateProfileModal from '../Modals/UpdateProfileModal'
import ManageAccountModal from '../Modals/ManageAccountModal'
import Logo from '../../assets/img/logo.png'

function MobileSidenav() {
  const [usersModalShow, setUsersModalShow] = React.useState(false)
  const [profileModalShow, setProfileModalShow] = React.useState(false)
  const [accountModalShow, setAccountModalShow] = React.useState(false)

  return (
    <div id="mobile-side-nav">
      <img src={Logo} style={{ width: '50px' }} alt="devlr logo"></img>
      <ul className="list-group">
        <li>
          <button type="button" href="/home">
            <i className="material-icons">home</i>
          </button>
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
          <button type="button" onClick={() => setAccountModalShow(true)}>
            <i className="material-icons">manage_accounts</i>
          </button>
          <ManageAccountModal
            show={accountModalShow}
            onHide={() => setAccountModalShow(false)}
          />
        </li>
        <li>
          <button type="button" href="/logout">
            <i className="material-icons">keyboard_return</i>
          </button>
        </li>
      </ul>
      <MobileUser />
    </div>
  )
}

export default MobileSidenav
