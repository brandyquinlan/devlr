import React, { useRef, useContext } from 'react'
import PostContainer from '../Posts/PostContainer'

function Activity({ posts, createComment, incrementLike, createPost }) {
  return (
    <PostContainer
      posts={posts}
      createPost={createPost}
      createComment={createComment}
      incrementLike={incrementLike}
    />
  )
}

export default Activity
