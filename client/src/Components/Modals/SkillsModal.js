import React, { useContext, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { ToastContainer, Flip } from 'react-toastify'
import { UserContext } from '../../utils/UserState'
import API from '../../utils/API'
import Toast from '../../utils/Toast'
import 'react-toastify/dist/ReactToastify.css'
import AddSkills from '../AddSkillsLangs/AddSkills'
import AddLangs from '../AddSkillsLangs/AddLangs'

function SkillsModal(props) {
  const [store, dispatch] = useContext(UserContext)
  const [newSkills, setNewSkills] = useState(store.profile.skills)
  const [newLangs, setNewLangs] = useState(store.profile.languages)
  // const { skills, languages } = store.profile
  // const newSkills = store.profile.skills

  function saveSkills() {
    API.updateProfile({ skills: newSkills }, store.user._id).then(() =>
      Toast('success', 'Skills & Languages Saves', 1000),
    )
  }

  function addSkill(e, skill) {
    e.preventDefault()
    console.log(skill)
    newSkills.push(skill)
    setNewSkills(newSkills)
    console.log(newSkills)
    dispatch({ type: 'update profile', payload: { skills: newSkills } })
  }

  function removeSkill(e, index) {
    e.preventDefault()
    newSkills.splice([index], 1)
    setNewSkills(newSkills)
    console.log(newSkills)
    dispatch({ type: 'update profile', payload: { skills: newSkills } })
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
          <AddSkills
            newSkills={newSkills}
            addSkill={addSkill}
            removeSkill={removeSkill}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="gradient"
            onClick={(event) => {
              event.preventDefault()
              saveSkills()
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

export default SkillsModal