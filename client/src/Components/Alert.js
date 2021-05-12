import React from 'react'
import { Alert } from 'react-bootstrap'

function CustomAlert({ show, setShow, body, variant }) {
  if (show) {
    return (
      <Alert
        variant={variant}
        style={{ width: '100%' }}
        onClose={() => setShow(false)}
        dismissible
      >
        <small>{body}</small>
      </Alert>
    )
  }
  return <></>
}

export default CustomAlert
