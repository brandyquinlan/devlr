import React from 'react'
import Tab from '../Tab'
import Background from './Background'

function BackgroundContainer({ profile }) {
  return (
    <div>
      <Tab title="My Background" expanded>
        {profile === null ? (
          <Background>
            Please create a profile to auto-fill this field.
          </Background>
        ) : (
          <Background profile={profile} />
        )}
      </Tab>
    </div>
  )
}

export default BackgroundContainer
