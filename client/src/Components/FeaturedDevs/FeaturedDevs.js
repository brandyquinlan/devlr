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
      const numItemsArr = []
      let numItems = 0
      while (!numItemsArr[2]) {
        const len = response.length
        const devIndex = Math.floor(Math.random() * Math.floor(len))
        devUser.indexOf(response[devIndex]) === -1
          ? devUser.push(response[devIndex]) && numItemsArr.push(numItems++)
          : null
      }
      setUsers(devUser)
    })
  }, [])

  return (
    <div>
      <br></br>
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
