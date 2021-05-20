import React, { useContext, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { ToastContainer, Flip } from 'react-toastify'
import { UserContext } from '../../utils/UserState'
import API from '../../utils/API'
import Toast from '../../utils/Toast'
import 'react-toastify/dist/ReactToastify.css'
import AddLangs from '../AddSkillsLangs/AddLangs'

function LangsModal(props) {
  const [store, dispatch] = useContext(UserContext)
  const [newLangs, setNewLangs] = useState(store.profile.languages)

  function saveLangs() {
    API.updateProfile({ languages: newLangs }, store.user._id).then(() =>
      Toast('success', 'Languages Saved', 1000),
    )
  }

  function addLang(e, lang) {
    e.preventDefault()
    newLangs.push(lang)
    setNewLangs(newLangs)
    dispatch({ type: 'update profile', payload: { languages: newLangs } })
  }
  function removeLang(e, index) {
    e.preventDefault()
    newLangs.splice([index], 1)
    setNewLangs(newLangs)
    dispatch({ type: 'update profile', payload: { languages: newLangs } })
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
            Add Skills and Languages
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddLangs
            newLangs={newLangs}
            addLang={addLang}
            removeLang={removeLang}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="gradient"
            onClick={(event) => {
              event.preventDefault()
              saveLangs()
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

export default LangsModal
