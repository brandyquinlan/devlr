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
          <h5>Delete this post?</h5>
          <hr />
          <p>Once it's gone, it's gone...</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button type="button" variant="secondary" onClick={() => props.hide()}>
          Cancel
        </Button>
        <Button
          type="button"
          variant="danger"
          className="gradient"
          onClick={(event) => {
            props.hide()
            props.deletePost(event)
          }}
        >
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteAccountModal
