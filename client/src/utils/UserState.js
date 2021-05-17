import React, { createContext, useReducer } from 'react'

import UserReducer from './UserReducer'

const initialState = {
  user: {},
  targetUser: {
    user: 0,
    name: '',
    highestGraduation: '',
    school: '',
    skills: [],
    totalYearsofExperience: '',
    currentPosition: '',
    company: '',
    from: '',
    to: '',
    githubUsername: '',
    languages: [],
    themePref: '222222',
    avatartUrl: '',
  },
  profile: {
    user: 0,
    name: '',
    highestGraduation: '',
    school: '',
    skills: [],
    totalYearsofExperience: '',
    currentPosition: '',
    company: '',
    from: '',
    to: '',
    githubUsername: '',
    languages: [],
    themePref: '222222',
    avatartUrl: '',
  },
}

const Store = ({ children }) => {
  const [store, dispatch] = useReducer(UserReducer, initialState)

  return (
    <UserContext.Provider value={[store, dispatch]}>
      {children}
    </UserContext.Provider>
  )
}

export const UserContext = createContext(initialState)
export default Store
