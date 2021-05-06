import React from 'react'
import { Modal, Button } from 'react-bootstrap'

function NewPostModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">New Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>Place Textarea</div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default NewPostModal
