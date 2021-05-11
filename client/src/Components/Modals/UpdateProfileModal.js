import React, { useContext } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { StoreContext } from '../../utils/GlobalState'

function UpdateProfileModal(props) {
  const [store, dispatch] = useContext(StoreContext)
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    console.log(JSON.stringify(data))
    setProfile(data)
  }

  function setProfile(data) {
    dispatch({ type: 'set user profile', payload: data })
  }
  // can we access the store and get current profile data to pre-populate so the user can update it?
  // if we put it in as a conditional for placeholder text will it save if they don't retype it?

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="small mb-2">
              For initial creation, all fields are required.
            </div>
            <div className="form-group">
              <label htmlFor="name"> Name</label>
              <input
                type="text"
                className="form-control"
                id="userName"
                required="true"
                placeholder="Dev Doe"
                {...register('userName')}
              />
            </div>
            <div className="form-group">
              <label htmlFor="highestGraduation">Highest Graduation</label>
              <input
                type="text"
                className="form-control"
                id="userGraduation"
                required="true"
                placeholder="Masters"
                {...register('userGraduation')}
              />
            </div>
            <div className="form-group">
              <label htmlFor="school">School</label>
              <input
                type="text"
                className="form-control"
                id="userSchool"
                required="true"
                placeholder="Dev University"
                {...register('userSchool')}
              />
            </div>
            <div className="form-group">
              <label htmlFor="skills">Skills</label>
              <input
                type="text"
                className="form-control"
                id="userSkills"
                required="true"
                placeholder="Relevant Skills"
                {...register('userSkills')}
              />
            </div>
            <div className="form-group">
              <label htmlFor="experience">Experience</label>
              <input
                type="number"
                className="form-control"
                id="userExperience"
                required="true"
                placeholder="Years of Experience"
                {...register('userExperience')}
              />
            </div>
            <div className="form-group">
              <label htmlFor="position">Position</label>
              <input
                type="text"
                className="form-control"
                id="userPosition"
                required="true"
                placeholder="Current Position"
                {...register('userPosition')}
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                className="form-control"
                id="userCompany"
                required="true"
                placeholder="Company"
                {...register('userCompany')}
              />
            </div>
            <div className="form-group">
              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                className="form-control"
                id="userStartDate"
                required="true"
                placeholder="MM/DD/YYYY"
                {...register('userStartDate')}
              />
            </div>
            <div className="form-group">
              <label htmlFor="endDate">End Date</label>
              <input
                type="date"
                className="form-control"
                id="userEndDate"
                required="true"
                placeholder="MM/DD/YYYY"
                {...register('userEndDate')}
              />
            </div>
            <div className="form-group">
              <label htmlFor="gitUserName">GitHub Username</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="at-addon">
                    @
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="userGitHub"
                  aria-label="username"
                  aria-describedby="at-addon"
                  required="true"
                  placeholder="username"
                  {...register('userGitHub')}
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
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default UpdateProfileModal
