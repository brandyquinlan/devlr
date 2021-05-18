import React from 'react'

function CurrentComments({ comments }) {
  return (
    <div>
      {comments.map((c, i) => (
        // Dont forget to add a key
        <div key={i}>
          <p>{c.text}</p>
          <p className="small text-muted">- {c.userName}</p>
          <hr className="75"></hr>
        </div>
      ))}
    </div>
  )
}

export default CurrentComments
