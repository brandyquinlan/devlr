import React, { useRef, useState, useContext } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { UserContext } from '../../utils/UserState'
import API from '../../utils/API'
import CurrentComments from '../CurrentComments/CurrentComments'

function PostCommentModal(props) {
  const [store, dispatch] = useContext(UserContext)
  const [text, setText] = useState('')
  const [thisPost, setThisPost] = props.state
  const textRef = useRef()

  function handleInputChange(event) {
    event.preventDefault()
    setText(textRef.current.value)
  }

  function createComment(event) {
    event.preventDefault()
    const newComment = {
      postId: props.postId,
      comment: {
        text,
        userName: store.profile.name,
        userId: store.user._id,
      },
    }

    API.addComment(newComment)
      .then(() => {
        setThisPost({
          ...thisPost,
          comments: [...thisPost.comments, newComment.comment],
        })
      })
      .catch((err) => console.warn(err))
  }

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Comments</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="scroll">
          {!thisPost.comments ? (
            'No Comments Yet'
          ) : (
            <CurrentComments comments={thisPost.comments} />
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
        <Button variant="secondary" type="button" onClick={createComment}>
          Add Comment
        </Button>
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
