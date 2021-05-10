import React, { useContext } from 'react'
import { StoreContext } from '../../utils/GlobalState'
import User from '../User/User'
import BrowseUsersModal from '../Modals/BrowseUsersModal'
import UpdateProfileModal from '../Modals/UpdateProfileModal'
import ManageAccountModal from '../Modals/ManageAccountModal'
import Logo from '../../assets/img/logo.png'

function Sidenav() {
  const [store, dispatch] = useContext(StoreContext)
  const [usersModalShow, setUsersModalShow] = React.useState(false)
  const [profileModalShow, setProfileModalShow] = React.useState(false)
  const [accountModalShow, setAccountModalShow] = React.useState(false)

  return (
    <div id="side-nav">
      <div className="d-flex flex-column align-items-start justify-content-start">
        <img src={Logo} style={{ width: '60px' }} alt="devlr logo"></img>
        <h2 className="mt-3">devlr</h2>
      </div>
      <ul className="list-group">
        <li>
          <button type="button" href="/home">
            <i className="material-icons">home</i>
            Home
          </button>
        </li>
        <li>
          <button type="button" onClick={() => setUsersModalShow(true)}>
            <i className="material-icons">groups</i>
            Browse Users
          </button>
        </li>
        <BrowseUsersModal
          show={usersModalShow}
          onHide={() => setUsersModalShow(false)}
        />
        <li>
          <button type="button" onClick={() => setProfileModalShow(true)}>
            <i className="material-icons">dashboard</i>Update Profile
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
            Account
          </button>
          <ManageAccountModal
            show={accountModalShow}
            onHide={() => setAccountModalShow(false)}
          />
        </li>
        <li>
          <button
            type="button"
            href="/"
            onClick={() => dispatch({ type: 'logout' })}
          >
            <i className="material-icons">keyboard_return</i>
            Logout
          </button>
        </li>
      </ul>
      <User />
    </div>
  )
}

export default Sidenav
