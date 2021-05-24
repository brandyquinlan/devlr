import React, { useContext } from 'react'
import { UserContext } from '../../utils/UserState'
import { ModalContext } from '../../utils/ModalState'
import MobileUser from '../User/MobileUser'
import BrowseUsersModal from '../Modals/BrowseUsersModal'
import UpdateProfileModal from '../Modals/UpdateProfileModal'
import Logo from '../../assets/img/logo.png'

function MobileSidenav({ home }) {
  const [store, dispatch] = useContext(UserContext)
  const [modals, modalDispatch] = useContext(ModalContext)

  return (
    <div id="mobile-side-nav">
      <img src={Logo} style={{ width: '50px' }} alt="devlr logo"></img>
      <ul className="list-group">
        <li>
          <a href="/home" alt="Home">
            <i className="material-icons">home</i>
          </a>
        </li>
        <li>
          <button
            type="button"
            alt="Browse Users"
            onClick={() => modalDispatch({ type: 'show user modal' })}
          >
            <i className="material-icons">groups</i>
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
                <i className="material-icons">dashboard</i>
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
          </button>
        </li>
      </ul>
      <MobileUser home={home} />
    </div>
  )
}

export default MobileSidenav
