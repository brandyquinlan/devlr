import React, { createContext, useReducer } from 'react'

import Reducer from './Reducer'

const initialState = {}

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
