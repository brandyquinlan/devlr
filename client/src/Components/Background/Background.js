import React from 'react'

export default function Background({ profile }) {
  return (
    <div>
      <h5>{profile.name}</h5>
      <p>@{profile.githubUsername}</p>
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
      <p>
        From : {profile.from.split('T')[0]} To : {profile.to.split('T')[0]}
      </p>
    </div>
  )
}
