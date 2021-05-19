import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../../utils/UserState'
import API from '../../utils/API'
import DevCard from '../User/DevCard'

function FeaturedDevs() {
  const [store, dispatch] = useContext(UserContext)
  const [users, setUsers] = useState([])
  useEffect(() => {
    API.getAllUsers().then((response) => {
      response = response.filter((user) => user.user !== store.user._id)
      const devUser = []
      for (let i = 0; i < 3; i += 1) {
        const len = response.length
        const devIndex = Math.floor(Math.random() * Math.floor(len))
        devUser.push(response[devIndex])
      }
      setUsers(devUser)
    })
  }, [])

  return (
    <div>
      {users.map((u) => (
        <DevCard
          key={u._id}
          id={u._id}
          user={u.user}
          name={u.name}
          avatarUrl={u.avatarUrl}
        />
      ))}
    </div>
  )
}

export default FeaturedDevs
