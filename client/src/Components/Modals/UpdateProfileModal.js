import React, { useContext, useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { ToastContainer, Flip } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { UserContext } from '../../utils/UserState'
import { ModalContext } from '../../utils/ModalState'
import API from '../../utils/API'
import Toast from '../../utils/Toast'

function UpdateProfileModal(props) {
  const [store, dispatch] = useContext(UserContext)
  const [modals, modalsDispatch] = useContext(ModalContext)
  const [init, setInit] = useState(false)

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: store.profile.name,
      highestGraduation: store.profile.highestGraduation,
      school: store.profile.school,
      totalYearsofExperience: store.profile.totalYearsofExperience,
      currentPosition: store.profile.currentPosition,
      company: store.profile.company,
      from: store.profile.from,
      to: store.profile.to,
      githubUsername: store.profile.githubUsername,
    },
  })

  function onSubmit(data) {
    API.updateProfile(data, store.user._id)
      .then(() => {
        if (modals.initialLogin) modalsDispatch({ type: 'init profile done' })
        dispatch({ type: 'update profile', payload: data })
        Toast('success', 'Your profile has been updated', 2000)
      })
      .catch(() => Toast('error', 'Error updating your profile', 3000))
  }

  useEffect(() => {
    if (modals.initialLogin) return setInit(true)
    setInit(false)
  }, [modals])

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
        scrollable
      >
        <Modal.Header closeButton={!init}>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Profile{' '}
            <i className="material-icons" style={{ fontSize: '26px' }}>
              dashboard
            </i>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="name"> Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required="true"
                  placeholder="Dev Doe"
                  {...register('name')}
                />
              </div>
              <div className="form-group">
                <label htmlFor="highestGraduation">Highest Graduation</label>
                <input
                  type="text"
                  className="form-control"
                  id="highestGraduation"
                  required="true"
                  placeholder="Masters"
                  {...register('highestGraduation')}
                />
              </div>
              <div className="form-group">
                <label htmlFor="school">School</label>
                <input
                  type="text"
                  className="form-control"
                  id="school"
                  required="true"
                  placeholder="Dev University"
                  {...register('school')}
                />
              </div>
              <div className="form-group">
                <label htmlFor="totalYearsofExperience">Experience</label>
                <input
                  type="number"
                  className="form-control"
                  id="totalYearsofExperience"
                  required="true"
                  placeholder="Years of Experience"
                  {...register('totalYearsofExperience')}
                />
              </div>
              <div className="form-group">
                <label htmlFor="currentPosition">Position</label>
                <input
                  type="text"
                  className="form-control"
                  id="currentPosition"
                  required="true"
                  placeholder="Current Position"
                  {...register('currentPosition')}
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  className="form-control"
                  id="company"
                  required="true"
                  placeholder="Company"
                  {...register('company')}
                />
              </div>
              <div className="form-group">
                <label htmlFor="from">Start Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="from"
                  placeholder="MM/DD/YYYY"
                  {...register('from')}
                />
              </div>
              <div className="form-group">
                <label htmlFor="to">End Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="to"
                  placeholder="MM/DD/YYYY"
                  {...register('to')}
                />
              </div>
              <div className="form-group">
                <label htmlFor="githubUsername">GitHub Username</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="at-addon">
                      @
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="githubUsername"
                    aria-label="username"
                    aria-describedby="at-addon"
                    required="true"
                    placeholder="username"
                    {...register('githubUsername')}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-secondary gradient">
                Update Profile
              </button>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {!init ? (
            <Button variant="secondary" onClick={props.onHide}>
              Close
            </Button>
          ) : null}
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UpdateProfileModal
