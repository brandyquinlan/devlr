import React from 'react'

export default function Background({ profile }) {
  return (
    <div style={{ columnCount: 2 }}>
      <h5>{profile.name}</h5>
      <p>{profile.gitUserName}</p>
      <hr className="75"></hr>
      <h5>Highest Level of Education</h5>
      <p>{profile.highestGraduation}</p>
      <h5 className="mt-2">School</h5>
      <p>{profile.school}</p>
      <hr className="75"></hr>
      <h5 className="mt-2">Years of Experience</h5>
      <p>{profile.totalYearsofExperience}</p>
      <hr className="75"></hr>
      <h5>Company</h5>
      <p>{profile.company}</p>
      <h5 className="my-2">Position</h5>
      <p>{profile.currentPosition}</p>
      <small>
        {profile.from} — {profile.to}
      </small>
    </div>
  )
}
