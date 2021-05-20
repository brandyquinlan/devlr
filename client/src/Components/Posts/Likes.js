import React, { useState, useRef, useContext, useEffect } from 'react'
import { Overlay, Tooltip } from 'react-bootstrap'
import { UserContext } from '../../utils/UserState'
import { socket } from '../../utils/socket'
import API from '../../utils/API'
import Toast from '../../utils/Toast'

function Likes({ likes, postId, state }) {
  const [store, dispatch] = useContext(UserContext)
  const [show, setShow] = useState(false)
  const [liked, setLiked] = useState(false)
  const [thisPost, setThisPost] = state
  const target = useRef(null)

  useEffect(() => {
    if (thisPost.likes.findIndex((l) => l.user === store.user._id) > -1)
      setLiked(true)
  }, [])

  function incrementLike(event) {
    event.preventDefault()

    // This if statement is the handler for if you have already liked a post
    if (liked) {
      let splicedLikes = thisPost.likes.filter(
        (like) => like.user !== store.user._id,
      )

      API.removeLike({ userId: store.user._id, postId }).then(
        () =>
          setThisPost({
            ...thisPost,
            likes: [...splicedLikes],
          }),
        socket.emit('post update', { targetId: thisPost.user }),
      )
      setLiked(false)
      return
    }

    const newLike = {
      postId,
      like: {
        user: store.user._id,
        userName: store.profile.name,
        _id: postId,
      },
    }

    API.addLike(newLike)
      .then(
        () => setLiked(true),
        setThisPost({
          ...thisPost,
          likes: [newLike.like, ...thisPost.likes],
        }),
        socket.emit('post update', { targetId: thisPost.user }),
      )
      .catch((err) => {
        console.log(err)
        Toast('error', 'Something went wrong!', 5000)
      })
  }

  let likedStyle = { color: 'palegoldenrod' }

  liked ? likedStyle : (likedStyle = { color: 'linen' })

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
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            onClick={(e) => incrementLike(e, postId)}
          >
            <span className="material-icons like" style={likedStyle}>
              auto_awesome
            </span>
            {likes.length}
          </button>
          <Overlay target={target} show={show} placement="left">
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
