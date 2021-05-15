import React from 'react'
import Tab from '../Tab'
import PostBox from './PostBox'
import NewPostBox from './NewPostBox'

function PostContainer({ posts, createComment, incrementLike, createPost }) {
  let postsNewOrder = []

  function reversePosts() {
    if (!posts) {
      postsNewOrder = []
    } else {
      postsNewOrder = posts.reverse()
    }
  }

  return (
    <div>
      <NewPostBox createPost={createPost} />
      {posts ? (
        [
          reversePosts(posts),
          postsNewOrder.map((p) => (
            <Tab title={p.title} expanded>
              <PostBox
                key={p.id}
                postId={p._id}
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
          )),
        ]
      ) : (
        <p>Make a post to get Started</p>
      )}
    </div>
  )
}

export default PostContainer
