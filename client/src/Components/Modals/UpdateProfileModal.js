import React, { useContext } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { ToastContainer, Flip } from 'react-toastify'
import { useForm } from 'react-hook-form'
import API from '../../utils/API'
import { UserContext } from '../../utils/UserState'
import Toast from '../../utils/Toast'

function UpdateProfileModal(props) {
  const [store, dispatch] = useContext(UserContext)
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: store.profile.name,
      highestGraduation: store.profile.highestGraduation,
      school: store.profile.school,
      skills: store.profile.skills,
      totalYearsofExperience: store.profile.totalYearsofExperience,
      currentPosition: store.profile.currentPosition,
      company: store.profile.company,
      from: store.profile.from,
      to: store.profile.to,
      githubUsername: store.profile.githubUsername,
      languages: store.profile.languages,
    },
  })

  const onSubmit = (data) => {
    API.updateProfile(data, store.user._id)
      .then((res) => {
        // ! this is going to be breaking because skills and languages are arrays on the Profile model, but here we are treating them as strings.
        // ! We need to set up a different way to adjust that information...
        dispatch({ type: 'update profile', payload: data })
        Toast('success', 'Your profile has been updated', 2000)
      })
      .catch(() => Toast('error', 'Error updating your profile', 3000))
  }
  // can we access the store and get current profile data to pre-populate so the user can update it?
  // if we put it in as a conditional for placeholder text will it save if they don't retype it?
  // I believe this got this up?^^^^^^^ -Keaton

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
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Profile
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
              {/* <div className="form-group">
                <label htmlFor="skills">
                  Skills <p className="small">Separate skills with commas</p>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="skills"
                  required="true"
                  placeholder="Relevant Skills"
                  {...register('skills')}
                />
              </div>
              <div className="form-group">
                <label htmlFor="languages">
                  Languages
                  <p className="small">Separate languages with commas</p>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="languages"
                  required="true"
                  placeholder="Languages"
                  {...register('languages')}
                />
              </div> */}

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
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UpdateProfileModal
