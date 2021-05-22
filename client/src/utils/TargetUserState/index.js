import React, { createContext, useReducer } from 'react'

import TargetUserReducer from './TargetUserReducer'

const initialState = {}

const Store = ({ children }) => {
  const [targetUser, targetDispatch] = useReducer(
    TargetUserReducer,
    initialState,
  )

  return (
    <TargetUserContext.Provider value={[targetUser, targetDispatch]}>
      {children}
    </TargetUserContext.Provider>
  )
}

export const TargetUserContext = createContext(initialState)
export default Store
