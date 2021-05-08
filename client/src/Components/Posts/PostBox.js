import React from 'react'

function PostBox({ key, user, body, date, likes, comments }) {
  return (
    <div>
      <div id={key}>
        <p>{body}</p>
        <p className="small">
          Posted by {user}, {date}
        </p>
      </div>
      <hr className="75"></hr>
      <div className="d-flex justify-content-end vertical-align-center">
        {!likes ? (
          ''
        ) : (
          <span>
            <span className="material-icons">auto_awesome</span>
            {likes.length}
          </span>
        )}{' '}
        {!comments ? (
          ''
        ) : (
          <span>
            <span className="material-icons pl-3">question_answer</span>
            {comments.length}
          </span>
        )}
      </div>
    </div>
  )
}

export default PostBox
