import React from 'react'
import PostContainer from '../Posts/PostContainer'

function Posts({ posts }) {
  return <PostContainer posts={posts} home={false} />
}

export default Posts
