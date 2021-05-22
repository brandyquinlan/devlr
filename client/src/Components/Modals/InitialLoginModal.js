import React, { useContext } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { ModalContext } from '../../utils/ModalState'

export default function InitialLoginModal(props) {
  const [modals, modalDispatch] = useContext(ModalContext)

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3>Welcome to devlr!</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column align-items-center">
          First things first, let's get your profile set up...
        </div>
        <Button
          variant="secondary"
          onClick={() => {
            modalDispatch({ type: 'lets go' })
          }}
          className="btn-block"
        >
          Let's go!
        </Button>
      </Modal.Body>
    </Modal>
  )
}
