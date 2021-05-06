import React from 'react'
import { Modal, Button } from 'react-bootstrap'

function BrowseUsersModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Browse Users
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>User Content</div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default BrowseUsersModal
