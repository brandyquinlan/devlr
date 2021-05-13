import React, { useContext } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { UserContext } from '../../utils/UserState'
import API from '../../utils/API'
import 'react-toastify/dist/ReactToastify.css'

function DeleteAccountModal(props) {
  const [store, dispatch] = useContext(UserContext)

  function deleteAccount(event) {
    event.preventDefault()
    const userId = store.user._id
    const profileId = store.profile._id

    API.deleteUser(userId, profileId).then(() => {
      window.location.href = '/'
    })
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
          So long, Dev! <span className="material-icons">waving_hand</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column align-items-center">
          <Button
            type="button"
            variant="danger"
            size="lg"
            onClick={deleteAccount}
          >
            Delete Account
          </Button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Nevermind
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteAccountModal
