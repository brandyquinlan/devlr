import React, { Suspense, lazy } from 'react'
import Loading from '../Loading'
const LazyPostBox = lazy(() => import('./PostBox'))

function component({
  postId,
  author,
  user,
  body,
  date,
  likes,
  comments,
  createComment,
  incrementLike,
}) {
  return (
    <Suspense fallback={<Loading />}>
      <LazyPostBox
        postId={postId}
        author={author}
        user={user}
        body={body}
        date={date}
        comments={comments}
        likes={likes}
        createComment={createComment}
        incrementLike={incrementLike}
      />
    </Suspense>
  )
}

export default component
