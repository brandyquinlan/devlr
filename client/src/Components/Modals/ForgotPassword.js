import React, { useState, useRef } from 'react'
import { Modal, Button, DropdownButton } from 'react-bootstrap'
import API from '../../utils/API'
import Alert from '../Alert'

function ManageAccountModal(props) {
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
            Reset your password
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={sendResetLink}>
            <div className="form-group">
              <label htmlFor="inputEmail1">
                Enter the email address associated with your account, and we
                will send you an email with a link to reset your password
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
              <Button type="submit">Send link</Button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Alert
            show={successAlert}
            setShow={setSuccessAlert}
            heading="A link has been sent, please check your email!"
            variant="success"
          />
          <Alert
            show={errorAlert}
            setShow={setErrorAlert}
            heading="Whoops, we couldnt find that user. Please try again"
            variant="error"
          />
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ManageAccountModal
