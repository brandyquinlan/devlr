import React from 'react'

function PostBox({ key, user, title, body, date, likes, comments }) {
  return (
    <div className="mt-3" id={key}>
      <h5>{title}</h5>
      <p>{body}</p>
      <p className="small">
        Posted by {user}, {date}
      </p>
      <p>
        Likes: {likes.length} Comments: {comments.length}
      </p>
      <hr className="75"></hr>
    </div>
  )
}

export default PostBox
