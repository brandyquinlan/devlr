import React, { useState, useEffect } from 'react'
import Tab from '../Tab'
// import PostBox from './PostBox'
import LazyPostBox from './LazyPostBox'
import NewPostBox from './NewPostBox'

function PostContainer({ posts, createComment, incrementLike, createPost }) {
  const [viewPosts, setViewPosts] = useState([])

  useEffect(() => {
    setViewPosts(posts)
  }, [posts])

  return (
    <div>
      <NewPostBox createPost={createPost} />
      {viewPosts.length > 0 ? (
        [
          viewPosts.map((p) => (
            <Tab title={p.title} expanded>
              <LazyPostBox
                key={p.id}
                postId={p._id}
                author={p.author}
                user={p.user}
                body={p.body}
                date={p.date}
                comments={p.comments}
                likes={p.likes}
                createComment={createComment}
                incrementLike={incrementLike}
              />
            </Tab>
          )),
        ]
      ) : (
        <p>Make a post to get Started</p>
      )}
    </div>
  )
}

export default PostContainer
