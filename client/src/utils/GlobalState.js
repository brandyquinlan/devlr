import React, { createContext, useReducer } from 'react'

import Reducer from './Reducer'

const initialState = {
  user: {},
  profile: {
    user: '',
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
    profilePic: '',
  },
}

const Store = ({ children }) => {
  const [store, dispatch] = useReducer(Reducer, initialState)

  return (
    <StoreContext.Provider value={[store, dispatch]}>
      {children}
    </StoreContext.Provider>
  )
}

export const StoreContext = createContext(initialState)
export default Store
