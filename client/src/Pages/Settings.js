import React, { useState, useEffect, useContext } from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import { Spinner, Button } from 'react-bootstrap'
import { UserContext } from '../utils/UserState'
import API from '../utils/API'
import ResetPasswordModal from '../Components/Modals/ResetPasswordModal'
import DeleteAccountModal from '../Components/Modals/DeleteAccountModal'
import ConfirmDeleteModal from '../Components/Modals/ConfrimDeleteModal'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export default function Settings() {
  const [store, dispatch] = useContext(UserContext)
  const [authenticating, setAuthenticating] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const [resetPasswordModal, setResetPasswordModal] = useState(false)
  const [deleteAccountModal, setDeleteAccountModal] = useState(false)
  const [confrimDeleteModal, setConfirmDeleteModal] = useState(false)
  const resetCode = useQuery().get('reset')

  // This is an if else. if the user is coming from a reset link we sent them, we need to immediately open the reset password modal
  useEffect(() => {
    async function authenticateUser() {
      await API.getUserInfo()
        .then(({ data }) => {
          if (data[0]._id) setAuthenticated(true)
        })
        .catch(() => setAuthenticating(false))
    }

    if (resetCode) {
      API.verifyResetCode(resetCode)
        .then(({ data }) => {
          if (data._id) setAuthenticated(true)
        })
        .catch((err) => {
          setAuthenticating(false)
          console.error(err)
        })
      setResetPasswordModal(true)
      window.history.pushState({}, null, '/home/settings')
    } else {
      authenticateUser()
    }
  }, [resetCode])

  useEffect(() => {
    API.getUserInfo()
      .then(({ data }) => {
        const [user, profile] = data
        // Storing the user and the profile in the context seperately, since that is how they are in the db
        dispatch({ type: 'set user', payload: user })
        dispatch({ type: 'set profile', payload: profile })
        // Had to add a timeout so user data has enough time to load
        setTimeout(() => {
          setAuthenticating(false)
        }, 1000)
      })
      .catch((err) => {
        console.error('Failed to get use information', err)
        setAuthenticating(false)
      })
  }, [authenticated])

  return (
    <div id="settings">
      {authenticating ? (
        <Spinner animation="border" />
      ) : (
        [
          authenticated === true ? (
            <div className="d-flex flex-column align-items-start">
              <a href="/home" className="mb-2">
                <span className="material-icons">west</span>Go Back
              </a>
              <div className="tab gradient">
                <h4>
                  Account Settings{' '}
                  <span className="material-icons" style={{ fontSize: '26px' }}>
                    manage_accounts
                  </span>
                </h4>
                <hr />
                <p className="small" id="accountMsg">
                  Use the buttons below to manage your devlr account settings.
                  These actions will have no effect your linked GitHub account.
                </p>
                <div className="separator mt-4"></div>
                <ResetPasswordModal
                  show={resetPasswordModal}
                  onHide={() => setResetPasswordModal(false)}
                  user={store.user}
                />
                <Button
                  type="button"
                  variant="secondary"
                  className="gradient"
                  onClick={() => setResetPasswordModal(true)}
                >
                  Reset Password
                </Button>
                <DeleteAccountModal
                  show={deleteAccountModal}
                  onHide={() => setDeleteAccountModal(false)}
                  user={store.user}
                  setConfirmDeleteModal={setConfirmDeleteModal}
                />
                <Button
                  type="button"
                  variant="secondary"
                  className="gradient ml-2"
                  onClick={() => setDeleteAccountModal(true)}
                >
                  Delete Account
                </Button>
                <ConfirmDeleteModal
                  show={confrimDeleteModal}
                  onHide={() => setConfirmDeleteModal(false)}
                />
              </div>
            </div>
          ) : (
            <Redirect to="/login" />
          ),
        ]
      )}
    </div>
  )
}
