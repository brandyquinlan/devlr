import React from 'react'
import LazyPostTab from './LazyPostTab'
import NewPostBox from './NewPostBox'

function PostContainer({ posts, createPost }) {
  return (
    <div>
      <NewPostBox createPost={createPost} />
      {posts ? (
        [
          posts.map((post, i) => (
            <LazyPostTab key={i} title={post.title} expanded post={post} />
          )),
        ]
      ) : (
        <p>Make a post to get Started</p>
      )}
    </div>
  )
}

export default PostContainer
