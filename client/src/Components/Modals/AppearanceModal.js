import React, { useContext } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { ToastContainer, Flip } from 'react-toastify'
import { UserContext } from '../../utils/UserState'
import API from '../../utils/API'
import Toast from '../../utils/Toast'
import 'react-toastify/dist/ReactToastify.css'

function AppearanceModal(props) {
  const [store, dispatch] = useContext(UserContext)
  const { themePref } = store.profile

  function saveTheme() {
    API.updateProfile({ themePref }, store.user._id).then(() =>
      Toast('success', 'Theme saved', 1000),
    )
  }

  return (
    <>
      <ToastContainer
        transition={Flip}
        position="top-center"
        autoClose={5000}
        hideProgressBar
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
            Change Appearance
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button
            type="button"
            className="btn btn-dark theme m-2"
            id="222222"
            onClick={() =>
              dispatch({ type: 'change theme', payload: '222222' })
            }
          >
            Dark
          </Button>
          <Button
            type="button"
            variant="secondary"
            className="btn btn-keycap theme m-2"
            id="90959A"
            onClick={() =>
              dispatch({ type: 'change theme', payload: '90959A' })
            }
          >
            Keycap
          </Button>
          <Button
            type="button"
            variant="secondary"
            className="btn btn-sand theme m-2"
            id="BBB092"
            onClick={() =>
              dispatch({ type: 'change theme', payload: 'BBB092' })
            }
          >
            Sand
          </Button>
          <Button
            type="button"
            variant="secondary"
            className="btn btn-putty theme m-2"
            id="D4ADA9"
            onClick={() =>
              dispatch({ type: 'change theme', payload: 'D4ADA9' })
            }
          >
            Putty
          </Button>
          <Button
            type="button"
            variant="secondary"
            className="btn btn-seaglass theme m-2"
            id="8FBC8F"
            onClick={() =>
              dispatch({ type: 'change theme', payload: '8FBC8F' })
            }
          >
            Seaglass
          </Button>
          <Button
            type="button"
            variant="secondary"
            className="btn btn-lagoon theme m-2"
            id="7FAEB9"
            onClick={() =>
              dispatch({ type: 'change theme', payload: '7FAEB9' })
            }
          >
            Lagoon
          </Button>
          <Button
            type="button"
            variant="secondary"
            className="btn btn-thistle theme m-2"
            id="9F879F"
            onClick={() =>
              dispatch({ type: 'change theme', payload: '9F879F' })
            }
          >
            Thistle
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={(event) => {
              event.preventDefault()
              saveTheme()
              props.onHide()
            }}
          >
            Save
          </Button>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AppearanceModal
