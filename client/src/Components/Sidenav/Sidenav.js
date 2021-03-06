import React, { useContext } from 'react'
import { UserContext } from '../../utils/UserState'
import { ModalContext } from '../../utils/ModalState'
import User from '../User/User'
import BrowseUsersModal from '../Modals/BrowseUsersModal'
import UpdateProfileModal from '../Modals/UpdateProfileModal'
import Logo from '../../assets/img/logo.png'

function Sidenav({ home }) {
  const [store, dispatch] = useContext(UserContext)
  const [modals, modalDispatch] = useContext(ModalContext)

  return (
    <div id="side-nav">
      <div className="d-flex flex-column align-items-start justify-content-start">
        <img src={Logo} style={{ width: '80px' }} alt="devlr logo"></img>
        <h2 className="mt-3">devlr</h2>
      </div>
      <ul className="list-group">
        <li>
          <a href="/home" alt="Home">
            <i className="material-icons">home</i>
            Home
          </a>
        </li>
        <li>
          <button
            type="button"
            alt="Browse Users"
            onClick={() => modalDispatch({ type: 'show user modal' })}
          >
            <i className="material-icons">groups</i>
            Browse Users
          </button>
        </li>
        <BrowseUsersModal
          show={modals.userModalShow}
          onHide={() => modalDispatch({ type: 'hide user modal' })}
        />
        {home ? (
          <>
            <li>
              <button
                type="button"
                onClick={() => modalDispatch({ type: 'show profile modal' })}
              >
                <i className="material-icons">dashboard</i>Update Profile
              </button>
            </li>
            <UpdateProfileModal
              show={modals.profileModalShow}
              onHide={() => modalDispatch({ type: 'hide profile modal' })}
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
            </li>
          </>
        ) : null}
        <li>
          <button
            type="button"
            alt="Logout"
            href="/"
            onClick={() => dispatch({ type: 'logout' })}
          >
            <i className="material-icons">keyboard_return</i>
            Logout
          </button>
        </li>
      </ul>
      <User home={home} />
    </div>
  )
}

export default Sidenav
