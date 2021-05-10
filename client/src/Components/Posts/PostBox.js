import React, { useState } from 'react'
import Likes from './Likes'
import PostCommentModal from '../Modals/PostCommentModal'

function PostBox({ id, user, body, date, likes, comments }) {
  const [commentsModalShow, setCommentsModalShow] = useState(false)

  return (
    <div>
      <div id={id}>
        <p>{body}</p>
        <p className="small">
          Posted by {user}, {date}
        </p>
      </div>
      <hr className="75"></hr>
      <div className="d-flex justify-content-end vertical-align-center">
        <Likes likes={likes} />{' '}
        <PostCommentModal
          show={commentsModalShow}
          onHide={() => setCommentsModalShow(false)}
          comments={comments}
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
