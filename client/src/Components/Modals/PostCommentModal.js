import React, { useRef, useState, useContext, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { UserContext } from '../../utils/UserState'
import { socket } from '../../utils/socket'
import API from '../../utils/API'
import CurrentComments from '../CurrentComments/CurrentComments'
import Toast from '../../utils/Toast'

function PostCommentModal(props) {
  const [store, dispatch] = useContext(UserContext)
  const [text, setText] = useState('')
  const [thisPost, setThisPost] = props.state
  const textRef = useRef()
  const commentsRef = useRef()
  const room = thisPost.user

  function handleInputChange(event) {
    event.preventDefault()
    setText(textRef.current.value)
  }

  function scrollToBottom() {
    commentsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  function createComment(event) {
    event.preventDefault()
    const newComment = {
      postId: props.postId,
      comment: {
        text,
        userName: store.profile.name,
        user: store.user._id,
        avatarUrl: store.profile.avatarUrl,
      },
    }

    API.addComment(newComment)
      .then(() => {
        newComment.comment.date = Date.now()
        setThisPost({
          ...thisPost,
          comments: [...thisPost.comments, newComment.comment],
        })
        socket.emit('post update', { targetId: thisPost.user })
      })
      .catch(() => {
        Toast('error', "We're sorry, something went wrong.", 2000)
      })
  }

  // This is how the scroll to bottom happens
  useEffect(() => {
    if (!props.show) return
    scrollToBottom()
    socket.emit('join room', { room })
    // when component unmounts, we want to leave the "room" of this post, unless we are the post owner on our home page
    return () => {
      if (thisPost.user !== store.user._id) socket.emit('leave room', { room })
    }
  }, [props.show, thisPost.comments])

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Comments{' '}
          <span className="material-icons" style={{ fontSize: '26px' }}>
            comment
          </span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="scroll" style={{ maxHeight: '35vh' }}>
          {!thisPost.comments ? (
            'No Comments Yet'
          ) : (
            <CurrentComments
              comments={thisPost.comments}
              commentsRef={commentsRef}
            />
          )}
        </div>
        <div className="tab bg-secondary mt-3 mb-1 gradient" id="commentBox">
          <textarea
            ref={textRef}
            id="comment"
            placeholder="Add comment"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="d-flex flex-row justify-content-end">
          <Button
            variant="secondary"
            type="button"
            className="gradient"
            onClick={createComment}
          >
            Add Comment
          </Button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default PostCommentModal
