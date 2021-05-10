import React from 'react'
import { Alert } from 'react-bootstrap'

function CustomAlert({ show, setShow, heading, body, variant }) {
  if (show) {
    return (
      <Alert variant={variant} onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{heading}</Alert.Heading>
        <p>{body}</p>
      </Alert>
    )
  }
  return <></>
}

export default CustomAlert
