import React, { createContext, useReducer } from 'react'

import PostReducer from './PostReducer'

const initialState = {
  posts: [],
}

const PostStore = ({ children }) => {
  const [postStore, dispatchPost] = useReducer(PostReducer, initialState)

  return (
    <PostContext.Provider value={[postStore, dispatchPost]}>
      {children}
    </PostContext.Provider>
  )
}

export const PostContext = createContext(initialState)
export default PostStore
