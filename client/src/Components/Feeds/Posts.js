import React from 'react'
import PostContainer from '../Posts/PostContainer'

function Activity({ posts, createPost }) {
  return (
    <div>
      {/* {loadingData ? (
        <PostContainer>Please wait while we get your posts...</PostContainer>
      ) : ( */}
      <PostContainer posts={posts} createPost={createPost} />
      {/* )} */}
    </div>
  )
}

export default Activity
