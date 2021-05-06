import React from 'react'
import { Modal, Button } from 'react-bootstrap'

function AppearanceModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Change Appearance
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>Btns</div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default AppearanceModal
