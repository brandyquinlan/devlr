import React from 'react'
import Linkify from 'linkifyjs/react'
import dayjs from 'dayjs'

function CurrentComments({ comments, commentsRef }) {
  return (
    <Linkify>
    <div>
      {comments.map((c, i) => (
        // Dont forget to add a key
        <div key={i}>
          <div>
            <a href={`/profile?user=${c.user}`}>
              <img
                src={c.avatarUrl}
                style={{ width: 40, height: 40 }}
                className="devPic float-left mx-2 mb-3 mt-1"
              ></img>
            </a>
          </div>
          <div>
            <p>{c.text}</p>
            <p className="small text-muted">
              <a href={`/profile?user=${c.user}`}>
                {c.userName} - {dayjs(c.date).format(`h:mma - M-DD-YY`)}
              </a>
            </p>
          </div>
          <hr className="75"></hr>
        </div>
      ))}
      <div ref={commentsRef} />
    </div>
    </Linkify>
  )
}

export default CurrentComments
