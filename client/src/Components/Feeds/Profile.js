import React, { useContext } from 'react'
import { UserContext } from '../../utils/UserState'
import Tab from '../Tab'
import LanguagesContainer from '../Languages/LanguagesContainer'
import BackgroundContainer from '../Background/BackgroundContainer'
import SkillsContainer from '../Skills/SkillsContainer'

function Profile({ projects }) {
  const [store, dispatch] = useContext(UserContext)
  // do main DB pull here to get all profile info then useState? or just pass as props?
  // or do we need to do it even one container up (page container) so we can
  // get posts too since that's a different feed?

  const { profile } = store

  // const profile = {
  //   name: 'Liz Townsend',
  //   gitUserName: 'liztownd',
  //   highestGraduation: 'BA',
  //   school: 'KU',
  //   skills: ['Front End Development', 'Graphic Design', 'React', 'Node.js'],
  //   TotalYearsOfexp: '20',
  //   companyName: 'N/A',
  //   currentPosition: 'Graphic Designer',
  //   fromDate: 'Nov 2005',
  //   toDate: 'present',
  //   languages: ['JavaScript', 'HTML5', 'CSS3'],
  // }

  return (
    <>
      <BackgroundContainer profile={profile} />
      <SkillsContainer skills={profile.skills} />
      <LanguagesContainer languages={profile.languages} />
      <Tab title="My Projects" content="la la la" projects={projects} />
    </>
  )
}

export default Profile
