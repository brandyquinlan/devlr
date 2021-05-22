import React from 'react'

export default function Background({ profile }) {
  return (
    <div id="backgroundCols" style={{ columnCount: 2 }}>
      <h6>{profile.name}</h6>
      <p>{profile.githubUsername}</p>
      <hr className="75"></hr>
      <h6>Highest Level of Education</h6>
      <p>{profile.highestGraduation}</p>
      <h6 className="mt-2">School</h6>
      <p>{profile.school}</p>
      <hr className="75"></hr>
      <h6 className="mt-2">Years of Experience</h6>
      <p>{profile.totalYearsofExperience}</p>
      <hr className="75"></hr>
      <h6>Company</h6>
      <p>{profile.company}</p>
      <h6 className="my-2">Position</h6>
      <p>{profile.currentPosition}</p>
      <small>
        {profile.from?.split('T')[0]} — {profile.to?.split('T')[0]}
      </small>
    </div>
  )
}
