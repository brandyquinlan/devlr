import React, { useEffect, useState } from 'react'
import API from '../../utils/API'
import DevCard from '../User/DevCard'

function FeaturedDevs() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    API.getAllUsers().then((response) => {
      const devUser = []
      for (let i = 0; i < 3; i += 1) {
        const len = response.length
        const devIndex = Math.floor(Math.random() * Math.floor(len))
        devUser.push(response[devIndex])
      }
      console.log(devUser)
      setUsers(devUser)
    })
  }, [])

  return (
    <div>
      {users.map((u) => (
        <DevCard key={u._id} id={u._id} name={u.name} avatarUrl={u.avatarUrl} />
      ))}
    </div>
  )
}

export default FeaturedDevs
