import React, { useState, useRef } from 'react'
import { Overlay, Tooltip } from 'react-bootstrap'

function Likes({ likes, incrementLike, postId }) {
  const [show, setShow] = useState(false)
  const target = useRef(null)

  return (
    <div>
      {!likes ? (
        <button
          type="button"
          className="p-0"
          onClick={(e) => incrementLike(e, postId)}
        >
          <span className="material-icons">auto_awesome</span>0
        </button>
      ) : (
        <>
          <button
            ref={target}
            type="button"
            onMouseEnter={() => setShow(!show)}
            onMouseLeave={() => setShow(!show)}
            onClick={(e) => incrementLike(e, postId)}
          >
            <span className="material-icons">auto_awesome</span>
            {likes.length}
          </button>
          <Overlay target={target.current} show={show} placement="left">
            {(props) => (
              <Tooltip id="likes" {...props}>
                <ul>
                  {likes.map((l) => (
                    <li key={l.user}>{l.userName}</li>
                  ))}
                </ul>
              </Tooltip>
            )}
          </Overlay>
        </>
      )}
    </div>
  )
}

export default Likes
