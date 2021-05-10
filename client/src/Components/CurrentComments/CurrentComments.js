import React from 'react'

function CurrentComments({ comments }) {
  return (
    <div>
      {comments.map((c) => (
        <div>
          <p>{c.text}</p>
          <p className="small text-muted">
            Posted by {c.user}, {c.date}
          </p>
          <hr className="75"></hr>
        </div>
      ))}
    </div>
  )
}

export default CurrentComments
