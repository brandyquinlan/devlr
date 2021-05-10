import React, { useState, useEffect, useRef } from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import API from '../utils/API'
import ResetPasswordModal from '../Components/Modals/ResetPasswordModal'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export default function Settings() {
  const [authenticating, setAuthenticating] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const [resetPasswordModal, setResetPasswordModal] = useState(false)
  const resetCode = useQuery().get('reset')
  const [user, setUser] = useState({})

  // This is an if else. if the user is coming from a reset link we sent them, we need to immediately open the reset password modal
  useEffect(() => {
    async function authenticateUser() {
      await API.getUser().then(({ data }) => {
        if (data._id) setAuthenticated(true)

        setUser(data)
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
    <div>
      {authenticating ? (
        <Spinner animation="border" />
      ) : (
        [
          authenticated === true ? (
            <div
              className="d-flex flex-row align-items-top justify-content-around"
              id="col1"
            >
              <div className="d-flex flex-column align-items-left" id="col2">
                <ResetPasswordModal
                  show={resetPasswordModal}
                  onHide={() => setResetPasswordModal(false)}
                  user={user}
                />
              </div>
              <div
                className="d-flex flex-column align-items-right ml-4"
                id="col3"
              ></div>
            </div>
          ) : (
            <Redirect to="/login" />
          ),
        ]
      )}
    </div>
  )
}
