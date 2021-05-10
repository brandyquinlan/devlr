import React, { useState, useRef } from 'react'
import { Modal, Button } from 'react-bootstrap'

function ManageAccountModal(props) {
  const [email, setEmail] = useState('')
  const emailRef = useRef()

  function handleInputChange(event) {
    event.preventDefault()

    setEmail(emailRef.current.value)
    console.log(email)
  }

  return (
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
        <form className="login">
          <div className="form-group">
            <label htmlFor="inputEmail1">Email address</label>
            <input
              ref={emailRef}
              onChange={handleInputChange}
              type="email"
              className="form-control"
              id="email-input"
              placeholder="Email"
            ></input>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ManageAccountModal
