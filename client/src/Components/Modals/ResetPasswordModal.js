import React, { useState, useRef } from 'react'
import { Modal, Button, DropdownButton } from 'react-bootstrap'
import API from '../../utils/API'
import Alert from '../Alert'

function ResetPasswordModal(props) {
  const [password, setPassword] = useState({})
  const [errorAlert, setErrorAlert] = useState(false)
  const [successAlert, setSuccessAlert] = useState(false)
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
      setErrorAlert(true)
      return
    }

    API.resetPassword(password.password, user._id)
      .then((res) => {
        API.login({
          email: user.email,
          password: password.password,
        })
        setSuccessAlert(true)
      })
      .catch((err) => console.error(err))
  }

  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Reset your password
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={resetPassword}>
            <div className="form-group">
              <label htmlFor="password">Enter your new password</label>
              <input
                required
                ref={passwordRef}
                onChange={passwordInputChange}
                type="password"
                className="form-control"
                id="password"
                placeholder="new password"
              ></input>
              <label htmlFor="confirm">Confirm new password</label>
              <input
                required
                ref={passwordConfirm}
                onChange={passwordInputChange}
                type="password"
                className="form-control"
                id="confirm"
                placeholder="confirm password"
              ></input>
              <Button type="submit">Save</Button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Alert
            show={successAlert}
            setShow={setSuccessAlert}
            heading="Your password has been reset!"
            variant="success"
          />
          <Alert
            show={errorAlert}
            setShow={setErrorAlert}
            heading="Please make sure your passwords are matching."
            variant="danger"
          />
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ResetPasswordModal
