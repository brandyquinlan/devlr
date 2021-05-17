import React, { createContext, useReducer } from 'react'

function Reducer(state, action) {
  switch (action.type) {
    case 'set posts':
      return action.payload
    default:
      throw new Error('Something broke in TargetUser reducer')
  }
}

const initialState = []

const Store = ({ children }) => {
  const [posts, postDispatch] = useReducer(Reducer, initialState)

  return (
    <PostContext.Provider value={[posts, postDispatch]}>
      {children}
    </PostContext.Provider>
  )
}

export const PostContext = createContext(initialState)
export default Store
