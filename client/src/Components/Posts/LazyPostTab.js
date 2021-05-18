import React, { useState, Suspense, lazy, useEffect } from 'react'
import Loading from '../Loading'
const LazyPostTab = lazy(() => import('./PostTab'))

function component({ post, title, home }) {
  const { _id, author, user, body, date, comments, likes } = post
  const [thisPost, setThisPost] = useState({
    postId: _id,
    author,
    user,
    body,
    date,
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
        home={home}
      />
    </Suspense>
  )
}

export default component
