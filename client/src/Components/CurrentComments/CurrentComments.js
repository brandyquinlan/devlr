import React from 'react'
import dayjs from 'dayjs'

function CurrentComments({ comments, commentsRef }) {
  return (
    <div>
      {comments.map((c, i) => (
        // Dont forget to add a key
        <div key={i}>
          <p>{c.text}</p>
          <p className="small text-muted">
            {c.userName} - {dayjs(c.date).format(`HH:mm - M-DD-YY`)}
          </p>
          <hr className="75"></hr>
        </div>
      ))}
      <div ref={commentsRef} />
    </div>
  )
}

export default CurrentComments
