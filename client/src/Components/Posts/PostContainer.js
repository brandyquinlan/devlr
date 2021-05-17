import React, { useContext } from 'react'
import { PostContext } from '../../utils/PostState'
import LazyPostTab from './LazyPostTab'
import NewPostBox from './NewPostBox'

function PostContainer({ /* posts, */ createPost, home = true }) {
  const [posts, postDispatch] = useContext(PostContext)

  let viewPosts = posts.length > 0 ? posts : []

  return (
    <div>
      {home ? <NewPostBox createPost={createPost} /> : null}
      {posts
        ? [
            posts.map((post, i) => (
              <LazyPostTab key={i} title={post.title} expanded post={post} />
            )),
          ]
        : [
            home ? (
              <h5>Make a post to get started</h5>
            ) : (
              <h5>This user has not made any posts yet</h5>
            ),
          ]}
    </div>
  )
}

export default PostContainer
