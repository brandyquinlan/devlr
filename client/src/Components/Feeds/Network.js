import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../../utils/UserState'
import { TargetUserContext } from '../../utils/TargetUserState'
import Tab from '../Tab'
import API from '../../utils/API'
import DevCard from '../User/DevCard'

function Network() {
  const [newFollowing, setNewFollowing] = useState([])
  const [newFollowers, setNewFollowers] = useState([])
  const [store, dispatch] = useContext(UserContext)
  const [targetUser, targetDispatch] = useContext(TargetUserContext)

  let { profile } = targetUser.profile ? targetUser : store
  const { followers, following } = profile;

  useEffect(() => {
    API.getAllUsers().then((res) => {
      filterFollowing(res), filterFollowers(res)
    })
  }, [followers, following])

  function filterFollowing(res) {
 
    const filteredFollowing = []
    if (following.length === 0) {
      return
    } else {
      for (let i = 0; i < res.length; i += 1) {
        following.map((f) => {
          if (f === res[i].user) {
            filteredFollowing.push(res[i])
          }
        })
      }
    }
    setNewFollowing(filteredFollowing)
  }

  function filterFollowers(res) {
    const filteredFollowers = []
    if (followers.length === 0) {
      return
    } else {
      for (let i = 0; i < res.length; i += 1) {
        followers.map((f) => {
          if (f === res[i].user) {
            filteredFollowers.push(res[i])
          }
        })
      }
    }
    setNewFollowers(filteredFollowers)
  }

  return (
    <div>
      <Tab title="Following">
        {newFollowing.length === 0
          ? 'You are not currently following any users.'
          : newFollowing.map((f) => (
              <DevCard
                key={f._id}
                id={f._id}
                user={f.user}
                avatarUrl={f.avatarUrl}
                name={f.name}
              />
            ))}
      </Tab>
      <Tab title="Followers">
        {newFollowers.length === 0
          ? 'No one is currently following you. Follow someone and maybe they will follow you back!'
          : newFollowers.map((f) => (
              <DevCard
                key={f._id}
                id={f._id}
                user={f.user}
                avatarUrl={f.avatarUrl}
                name={f.name}
              />
            ))}
      </Tab>
    </div>
  )
}

export default Network
