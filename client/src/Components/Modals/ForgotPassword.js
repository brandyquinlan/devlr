import React, { useState, useRef } from 'react'
import { Modal, Button } from 'react-bootstrap'
import API from '../../utils/API'
import Alert from '../Alert'

function ForgotPasswordModal(props) {
  const [email, setEmail] = useState('')
  const [errorAlert, setErrorAlert] = useState(false)
  const [successAlert, setSuccessAlert] = useState(false)
  const emailRef = useRef()

  function handleInputChange(event) {
    event.preventDefault()
    setEmail(emailRef.current.value)
  }

  function sendResetLink(event) {
    event.preventDefault()

    API.sendResetLink(email)
      .then(() => {
        setSuccessAlert(true)
      })
      .catch((e) => {
        setErrorAlert(true)
      })
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
            Reset Password{' '}
            <span className="material-icons" style={{ fontSize: '26px' }}>
              restart_alt
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={sendResetLink}>
            <div className="form-group">
              <label htmlFor="inputEmail1">
                Enter the email address associated with your account, and we
                will send you an email with a link to reset your password.
              </label>
              <input
                required
                ref={emailRef}
                onChange={handleInputChange}
                type="email"
                className="form-control"
                id="email-input"
                placeholder="Email"
              ></input>
              <Button
                type="submit"
                variant="secondary"
                className="gradient float-right"
              >
                Send Link
              </Button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Alert
            show={successAlert}
            setShow={setSuccessAlert}
            body="A link has been sent, please check your email."
            variant="success"
          />
          <Alert
            show={errorAlert}
            setShow={setErrorAlert}
            body="Oops! We couldn't find that user. Please try again."
            variant="danger"
          />
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ForgotPasswordModal
