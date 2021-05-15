import React, { useState, useRef } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { ToastContainer, Flip } from 'react-toastify'
import API from '../../utils/API'
import Toast from '../../utils/Toast'
import 'react-toastify/dist/ReactToastify.css'

function ResetPasswordModal(props) {
  const [password, setPassword] = useState({})
  const { user } = props

  const passwordRef = useRef()
  const passwordConfirm = useRef()

  function passwordInputChange(event) {
    event.preventDefault()
    setPassword({
      password: passwordRef.current.value,
      passwordConfirm: passwordConfirm.current.value,
    })
  }

  function resetPassword(event) {
    event.preventDefault()
    if (password.password !== password.passwordConfirm) {
      Toast('error', 'Passwords must match', 2000)
      return
    }

    API.resetPassword(password.password, user._id)
      .then((res) => {
        API.login({
          email: user.email,
          password: password.password,
        })
        Toast('success', 'Your password has been reset', 4000)
        props.onHide()
      })
      .catch((err) => console.error(err))
  }

  return (
    <>
      <ToastContainer
        transition={Flip}
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Reset Password{' '}
            <span className="material-icons" style={{ fontSize: '26px' }}>
              restart_alt
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={resetPassword}>
            <div className="form-group">
              <label htmlFor="password">Enter New Password</label>
              <input
                required
                ref={passwordRef}
                onChange={passwordInputChange}
                type="password"
                className="form-control"
                id="password"
                placeholder="password"
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="confirm">Confirm New Password</label>
              <input
                required
                ref={passwordConfirm}
                onChange={passwordInputChange}
                type="password"
                className="form-control"
                id="confirm"
                placeholder="password"
              ></input>
            </div>
            <Button
              type="submit"
              variant="secondary"
              className="gradient float-right"
            >
              Reset
            </Button>
            <Button
              variant="secondary"
              className="float-right mr-2"
              onClick={props.onHide}
            >
              Close
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ResetPasswordModal
