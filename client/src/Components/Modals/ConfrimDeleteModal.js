import React, { useContext } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { ToastContainer, Flip, toast } from 'react-toastify'
import { StoreContext } from '../../utils/GlobalState'
import API from '../../utils/API'
import 'react-toastify/dist/ReactToastify.css'

function DeleteAccountModal(props) {
  const [store, dispatch] = useContext(StoreContext)

  function errorToast() {
    toast.error('Incorrect email or password', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  function deleteAccount(event) {
    event.preventDefault()
    const userId = store.user._id
    const profileId = store.profile._id

    API.deleteUser(userId, profileId)
      .then(() => {
        window.location.href = '/'
      })
      .catch(() => {
        errorToast()
      })
  }

  return (
    <>
      <ToastContainer
        transition={Flip}
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            This is your last chance to turn back
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column align-items-center">
            <Button type="button" variant="danger" onClick={deleteAccount}>
              DELETE ACCOUNT
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            I changed my mind...
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default DeleteAccountModal
