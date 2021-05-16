import React from 'react'
import PostContainer from '../Posts/PostContainer'

function Activity({ posts, createComment, createPost, incrementLike }) {
  return (
    <>
      {/* {loadingData ? (
        <PostContainer>Please wait while we get your posts...</PostContainer>
      ) : ( */}
      <PostContainer
        posts={posts}
        createPost={createPost}
        createComment={createComment}
        incrementLike={incrementLike}
      />
      {/* )} */}
    </>
  )
}

export default Activity
