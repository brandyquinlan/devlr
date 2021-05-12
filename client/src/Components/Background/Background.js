import React from 'react'

export default function Background({ profile }) {
  return (
    <div style={{ columnCount: 2 }}>
      <h5>GitHub</h5>
      <p>{profile.gitUserName}</p>
      <hr className="75"></hr>
      <h5>Highest Level of Education</h5>
      <p>{profile.highestGraduation}</p>
      <h5 className="mt-2">School</h5>
      <p>{profile.school}</p>
      <hr className="75"></hr>
      <h5 className="mt-2">Years of Experience</h5>
      <p>{profile.TotalYearsOfexp}</p>
      <hr className="75"></hr>
      <h5>Company</h5>
      <p>{profile.companyName}</p>
      <h5 className="my-2">Position</h5>
      <p>{profile.currentPosition}</p>
      <small>
        {profile.fromDate} — {profile.toDate}
      </small>
    </div>
  )
}
