import React, { createContext, useReducer } from 'react'

import PostReducer from './PostReducer'

const initialState = []

const Store = ({ children }) => {
  const [posts, postDispatch] = useReducer(PostReducer, initialState)

  return (
    <PostContext.Provider value={[posts, postDispatch]}>
      {children}
    </PostContext.Provider>
  )
}

export const PostContext = createContext(initialState)
export default Store
