import React, { useState } from 'react'
import Likes from './Likes'
import PostCommentModal from '../Modals/PostCommentModal'

function PostBox({
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
  const [commentsModalShow, setCommentsModalShow] = useState(false)

  return (
    <div>
      <div id={postId}>
        <p className="mb-1">{body}</p>
        <p className="small" id={user}>
          Posted by {author}, {date.split('T')[0]}
        </p>
      </div>
      <hr className="75"></hr>
      <div className="d-flex justify-content-end vertical-align-center">
        <Likes likes={likes} postId={postId} incrementLike={incrementLike} />{' '}
        <PostCommentModal
          show={commentsModalShow}
          onHide={() => setCommentsModalShow(false)}
          comments={comments}
          createComment={createComment}
          postId={postId}
        />
        <button
          type="button"
          className="p-0"
          onClick={() => setCommentsModalShow(true)}
        >
          <span className="material-icons pl-3">question_answer</span>
          {!comments ? 0 : comments.length}
        </button>
      </div>
    </div>
  )
}

export default PostBox
