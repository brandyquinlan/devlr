import React from 'react'
import PostContainer from '../Posts/PostContainer'

function Activity() {
  return (
    <div>
      {/* {loadingData ? (
        <PostContainer>Please wait while we get your posts...</PostContainer>
      ) : ( */}
      <PostContainer />
      {/* )} */}
    </div>
  )
}

export default Activity
