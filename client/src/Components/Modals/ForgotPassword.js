import React, { useState, useRef } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { ToastContainer, Flip } from 'react-toastify'
import API from '../../utils/API'
import Toast from '../../utils/Toast'

function ForgotPasswordModal(props) {
  const [email, setEmail] = useState('')
  const emailRef = useRef()

  function handleInputChange(event) {
    event.preventDefault()
    setEmail(emailRef.current.value)
  }

  function sendResetLink(event) {
    event.preventDefault()

    API.sendResetLink(email)
      .then(() => {
        Toast('success', 'A link has been sent to your email address', 2000)
      })
      .catch((e) => {
        Toast('error', 'User not found', 2000)
      })
  }
  return (
    <>
      <ToastContainer
        transition={Flip}
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
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
      </Modal>
    </>
  )
}

export default ForgotPasswordModal
