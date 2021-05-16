import React, { useState, useRef, useContext } from 'react'
import { Overlay, Tooltip } from 'react-bootstrap'
import { UserContext } from '../../utils/UserState'
import API from '../../utils/API'
import Toast from '../../utils/Toast'

function Likes({ likes, postId, state }) {
  const [store, dispatch] = useContext(UserContext)
  const [show, setShow] = useState(false)
  const [thisPost, setThisPost] = state
  const target = useRef(null)

  function incrementLike(event) {
    event.preventDefault()
    if (thisPost.likes.findIndex((l) => l.user === store.user._id) > -1) {
      Toast('error', 'youve already liked this', 1000)
      return
    }
    const newLike = {
      postId,
      like: {
        user: store.user._id,
        userName: store.profile.name,
      },
    }
    // send to DB as an update on the post with postID
    API.addLike(newLike)
      .then((res) => {
        setThisPost({
          ...thisPost,
          likes: [newLike, ...thisPost.likes],
        })
        console.log(res)
      })
      .catch((err) => {
        console.error('Failed to add like', err)
      })

    // socket.io?
  }

  return (
    <div>
      {likes.length === 0 ? (
        <button type="button" className="p-0" onClick={incrementLike}>
          <span className="material-icons">auto_awesome</span>
          {likes}
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
                  {likes.map((l, i) => (
                    <li key={i}>{l.userName}</li>
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
