import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

function DeleteAccountModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete Account{' '}
          <span className="material-icons" style={{ fontSize: '26px' }}>
            person_remove
          </span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div
          className="gradient"
          style={{
            border: 'none',
            borderRadius: '20px',
            padding: '2rem',
            margin: '0',
          }}
        >
          <h5>We&apos;re sad to see you go!</h5>
          <hr />
          <p>Are you sure you want to delete this devlr account?</p>
          <br />
          <p className="small">
            This change is irreversible, but you can always create a new
            account.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          type="button"
          variant="secondary"
          className="gradient"
          onClick={() => {
            props.onHide()
            props.setConfirmDeleteModal(true)
          }}
        >
          Delete and Logout
        </Button>
        <Button variant="secondary" onClick={props.onHide}>
          Go Back
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteAccountModal
