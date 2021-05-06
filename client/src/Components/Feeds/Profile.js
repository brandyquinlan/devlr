import React from 'react'
import Tab from '../Tab'
import LanguagesContainer from '../Languages/LanguagesContainer'

function Profile() {
  return (
    <>
      <Tab title="My Background" />
      <LanguagesContainer />
      <Tab title="My Projects" />
    </>
  )
}

export default Profile
