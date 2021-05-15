import React from 'react'
import PostContainer from '../Posts/PostContainer'

function Activity({ posts, createComment, incrementLike }) {
  // console.log('activity', posts)
  return (
    <PostContainer
      posts={posts}
      createComment={createComment}
      incrementLike={incrementLike}
    />
  )
}

export default Activity
