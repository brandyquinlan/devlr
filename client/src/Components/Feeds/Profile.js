import React, { useContext } from 'react'
import { UserContext } from '../../utils/UserState'
import Projects from '../Projects/Projects'
import LanguagesContainer from '../Languages/LanguagesContainer'
import BackgroundContainer from '../Background/BackgroundContainer'
import SkillsContainer from '../Skills/SkillsContainer'
import { TargetUserContext } from '../../utils/TargetUserState'

function Profile({ projects, home }) {
  const [store, dispatch] = useContext(UserContext)
  const [targetUser, targetDispatch] = useContext(TargetUserContext)
  // do main DB pull here to get all profile info then useState? or just pass as props?
  // or do we need to do it even one container up (page container) so we can
  // get posts too since that's a different feed?

  let { profile } = targetUser.profile ? targetUser : store

  return (
    <div>
      <BackgroundContainer profile={profile} />
      <SkillsContainer skills={profile.skills} home={home} />
      <LanguagesContainer languages={profile.languages} home={home} />
      <Projects projects={projects} profile={profile} home={home} />
    </div>
  )
}

export default Profile
