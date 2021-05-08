import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import ReactDOM from "react-dom"
import { useForm } from "react-hook-form"


function UpdateProfileModal(props) {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
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
          Update Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="small mb-2">For initial creation, all fields are required.</div>
            <div class="form-group">
              <label htmlFor="name"> Name</label>
              <input type="text" class="form-control" id="userName" required="true" placeholder="Dev Doe" {...register("userName")} />
            </div>
            <div class="form-group">
              <label htmlFor="highestGraduation">Highest Graduation</label>
              <input type="text" class="form-control" id="userGraduation" required="true" placeholder="Masters" {...register("userGraduation")} />
            </div>
            <div class="form-group">
              <label htmlFor="school">School</label>
              <input type="text" class="form-control" id="userSchool" required="true" placeholder="Dev University" {...register("userSchool")} />
            </div>
            <div class="form-group">
              <label htmlFor="skills">Skills</label>
              <input type="text" class="form-control" id="userSkills" required="true" placeholder="Relevant Skills" {...register("userSkills")} />
            </div>
            <div class="form-group">
              <label htmlFor="experience">Experience</label>
              <input type="number" class="form-control" id="userExperience" required="true" placeholder="Years of Experience" {...register("userExperience")} />
            </div>
            <div class="form-group">
              <label htmlFor="position">Position</label>
              <input type="text" class="form-control" id="userPosition" required="true" placeholder="Current Position" {...register("userPosition")} />
            </div>
            <div class="form-group">
              <label htmlFor="company">Company</label>
              <input type="text" class="form-control" id="userCompany" required="true" placeholder="Company" {...register("userCompany")} />
            </div>
            <div class="form-group">
              <label htmlFor="startDate">Start Date</label>
              <input type="date" class="form-control" id="userStartDate" required="true" placeholder="MM/DD/YYYY" {...register("userStartDate")} />
            </div>
            <div class="form-group">
              <label htmlFor="endDate">End Date</label>
              <input type="date" class="form-control" id="userEndDate" required="true" placeholder="MM/DD/YYYY" {...register("userEndDate")} />
            </div>
            <div class="form-group">
              <label htmlFor="gitUserName">GitHub Username</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="at-addon">@</span>
                </div>
                <input type="text" class="form-control" id="userGitHub" aria-label="username"
                  aria-describedby="at-addon" required="true" placeholder="username" {...register("userGitHub")} />
              </div>
            </div>
              <button type="submit" class="btn btn-secondary gradient">Update Profile</button>
          </form>
        </div>
      </Modal.Body >
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal >
  )
}

export default UpdateProfileModal
