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
          Delete Account
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>
          WARNING: Once your account has been delted, it cannot be recovered.
          Proceed at your own risk
        </h3>
        <Button
          type="button"
          variant="danger"
          onClick={() => {
            props.onHide()
            props.setConfirmDeleteModal(true)
          }}
        >
          CONTINUE
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteAccountModal
