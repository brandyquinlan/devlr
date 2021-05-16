import React, { useState, useRef, useContext } from 'react'
import { Overlay, Tooltip } from 'react-bootstrap'
import { UserContext } from '../../utils/UserState'
import API from '../../utils/API'
import Toast from '../../utils/Toast'

function Likes({ likes, postId, state }) {
  const [store, dispatch] = useContext(UserContext)
  const [show, setShow] = useState(false)
  const [liked, setLiked] = useState(false)
  const [thisPost, setThisPost] = state
  const target = useRef(null)

  function incrementLike(event) {
    event.preventDefault()

    // This is the handler for if you have already liked a post
    if (
      thisPost.likes.findIndex((l) => l.user === store.user._id) > -1 ||
      liked
    ) {
      // Have to update the state in a somewhat complicated manner
      // First find the index of the like belonging to the user
      const index = thisPost.likes.findIndex((i) => i.user === store.user._id)
      // Then set up the new array of likes.
      let splicedLikes =
        // For some reason it gets buggy when the post only has one like, so just check for that first
        thisPost.likes.length < 2 ? [] : thisPost.likes.splice(index, 1)

      API.removeLike({ userId: store.user._id, postId }).then(() =>
        setThisPost({
          ...thisPost,
          likes: [...splicedLikes],
        }),
      )
      setLiked(false)
      return
    }

    const newLike = {
      postId,
      like: {
        user: store.user._id,
        userName: store.profile.name,
      },
    }

    API.addLike(newLike)
      .then(() => {
        setLiked(true)
        setThisPost({
          ...thisPost,
          likes: [newLike.like, ...thisPost.likes],
        })
      })
      .catch(() => {
        Toast('error', 'Something went wrong!', 5000)
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
