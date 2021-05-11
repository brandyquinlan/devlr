import React, { useState, useEffect, useRef } from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import { Spinner, Button } from 'react-bootstrap'
import API from '../utils/API'
import ResetPasswordModal from '../Components/Modals/ResetPasswordModal'
import DeleteAccountModal from '../Components/Modals/DeleteAccountModal'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export default function Settings() {
  const [authenticating, setAuthenticating] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const [resetPasswordModal, setResetPasswordModal] = useState(false)
  const [deleteAccountModal, setDeleteAccountModal] = useState(false)
  const resetCode = useQuery().get('reset')
  const [user, setUser] = useState({})

  // This is an if else. if the user is coming from a reset link we sent them, we need to immediately open the reset password modal
  useEffect(() => {
    async function authenticateUser() {
      await API.getUser().then(({ data }) => {
        if (data._id) setAuthenticated(true)

        setUser({
          email: data.email,
          _id: data._id,
        })
        setAuthenticating(false)
      })
    }

    if (resetCode) {
      API.verifyResetCode(resetCode)
        .then(({ data }) => {
          if (data._id) setAuthenticated(true)

          setUser({
            email: data.email,
            _id: data._id,
          })
          setAuthenticating(false)
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
                  These actions have no effect on your linked GitHub account.
                </p>
                <div className="separator mt-4"></div>
                <ResetPasswordModal
                  show={resetPasswordModal}
                  onHide={() => setResetPasswordModal(false)}
                  user={user}
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
                  user={user}
                />
                <Button
                  type="button"
                  variant="secondary"
                  className="gradient ml-2"
                  onClick={() => setDeleteAccountModal(true)}
                >
                  Delete Account
                </Button>
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
