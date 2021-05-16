import React, { useState, Suspense, lazy } from 'react'
import Loading from '../Loading'
const LazyPostTab = lazy(() => import('./PostTab'))

function component({ post, title }) {
  const { _id, author, user, body, date, comments, likes } = post
  const [thisPost, setThisPost] = useState({
    comments: comments,
    likes: likes,
  })

  return (
    <Suspense fallback={<Loading />}>
      <LazyPostTab
        post={{
          postId: _id,
          author,
          user,
          body,
          date,
          comments: thisPost.comments,
          likes: thisPost.likes,
        }}
        title={title}
        state={[thisPost, setThisPost]}
      />
    </Suspense>
  )
}

export default component
