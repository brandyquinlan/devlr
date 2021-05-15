import React from 'react'

function CurrentComments({ comments }) {
  return (
    <div>
      {comments.map((c) => (
        // Dont forget to add a key
        <div key={c}>
          <p>{c.text}</p>
          <p className="small text-muted">
            Posted by {c.userName}, {c.date}
          </p>
          <hr className="75"></hr>
        </div>
      ))}
    </div>
  )
}

export default CurrentComments
