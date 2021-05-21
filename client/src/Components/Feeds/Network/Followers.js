import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../../../utils/UserState'
import { TargetUserContext } from '../../../utils/TargetUserState'
import Tab from '../../Tab'
import API from '../../../utils/API'
import DevCard from '../../User/DevCard'
import Loading from '../../Loading'

export default function Followers() {
  const [store, dispatch] = useContext(UserContext)
  const [targetUser, targetDispatch] = useContext(TargetUserContext)
  const [newFollowers, setNewFollowers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  let { profile } = targetUser.profile ? targetUser : store
  const { followers } = profile

  useEffect(() => {
    API.getAllUsers().then((res) => {
      filterFollowers(res)
      setIsLoading(false)
    })
  }, [followers])

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
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Tab title="Followers" expanded>
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
      )}
    </>
  )
}
