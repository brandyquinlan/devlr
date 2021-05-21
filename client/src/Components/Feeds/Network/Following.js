import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../../../utils/UserState'
import { TargetUserContext } from '../../../utils/TargetUserState'
import Tab from '../../Tab'
import API from '../../../utils/API'
import DevCard from '../../User/DevCard'
import Loading from '../../Loading'

export default function Following() {
  const [store, dispatch] = useContext(UserContext)
  const [targetUser, targetDispatch] = useContext(TargetUserContext)
  const [newFollowing, setNewFollowing] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  let { profile } = targetUser.profile ? targetUser : store
  const { following } = profile

  useEffect(() => {
    API.getAllUsers().then((res) => {
      filterFollowing(res)
      setIsLoading(false)
    })
  }, [following])

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

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Tab title="Following" expanded>
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
      )}
    </>
  )
}
