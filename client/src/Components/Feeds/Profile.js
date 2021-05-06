import React from 'react'
import Tab from '../Tab'
import LanguagesContainer from '../Languages/LanguagesContainer'

function Profile() {
  return (
    <>
      <Tab title="My Background" content="figuring it out" />
      <LanguagesContainer />
      <Tab title="My Projects" content="la la la" />
    </>
  )
}

export default Profile
