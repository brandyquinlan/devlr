import React, { useContext } from 'react'
import { UserContext } from '../../utils/UserState'
import Projects from '../Projects/Projects'
import LanguagesContainer from '../Languages/LanguagesContainer'
import BackgroundContainer from '../Background/BackgroundContainer'
import SkillsContainer from '../Skills/SkillsContainer'

function Profile({ projects }) {
  const [store, dispatch] = useContext(UserContext)
  // do main DB pull here to get all profile info then useState? or just pass as props?
  // or do we need to do it even one container up (page container) so we can
  // get posts too since that's a different feed?

  const { profile } = store

  return (
    <>
      <BackgroundContainer profile={profile} />
      <SkillsContainer skills={profile.skills} />
      <LanguagesContainer languages={profile.languages} />
      <Projects projects={projects} profile={profile} />
    </>
  )
}

export default Profile
