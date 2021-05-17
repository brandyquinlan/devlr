import React, { createContext, useReducer } from 'react'

function Reducer(state, action) {
  switch (action.type) {
    case 'set target':
      return action.payload
    default:
      throw new Error('Something broke in TargetUser reducer')
  }
}

const initialState = {}

const Store = ({ children }) => {
  const [targetUser, targetDispatch] = useReducer(Reducer, initialState)

  return (
    <TargetUserContext.Provider value={[targetUser, targetDispatch]}>
      {children}
    </TargetUserContext.Provider>
  )
}

export const TargetUserContext = createContext(initialState)
export default Store
