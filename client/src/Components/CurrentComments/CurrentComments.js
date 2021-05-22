import React from 'react'
import Linkify from 'linkifyjs/react'
import dayjs from 'dayjs'
import { UserContext } from '../../utils/UserState'

function CurrentComments({ comments, commentsRef }) {
  const [store, dispatch] = useContext(UserContext)

  return (
    <Linkify>
      <div>
        {comments.map((c, i) => (
          // Dont forget to add a key
          <div key={i}>
            <div>
              <a
                href={
                  c.user === store.user._id
                    ? '/home'
                    : `/profile?user=${c.user}`
                }
              >
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
                <a
                  href={
                    c.user === store.user._id
                      ? '/home'
                      : `/profile?user=${c.user}`
                  }
                >
                  {c.userName} - {dayjs(c.date).format(`h:mma - M-DD-YY`)}
                </a>
              </p>
            </div>
            <hr className="75"></hr>
          </div>
        ))}
        {/* This is the ref that is targeted for the scroll to bottom thing */}
        <div ref={commentsRef} />
      </div>
    </Linkify>
  )
}

export default CurrentComments
