import React from 'react'
import Tab from '../Tab'
import PostBox from './PostBox'

function PostContainer({ posts, createComment, incrementLike }) {
  return (
    <div>
      {posts.map((p) => (
        <Tab title={p.title}>
          <PostBox
            key={p.id}
            postId={p.id}
            author={p.author}
            user={p.user}
            title={p.title}
            body={p.body}
            date={p.date}
            comments={p.comments}
            likes={p.likes}
            createComment={createComment}
            incrementLike={incrementLike}
          />
        </Tab>
      ))}
    </div>
  )
}

export default PostContainer
