import React from 'react'
import PostContainer from '../Posts/PostContainer'

function ProfilePosts({ posts }) {
  return <PostContainer posts={posts} home={false} />
}

export default ProfilePosts