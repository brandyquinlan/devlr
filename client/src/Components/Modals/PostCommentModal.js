import React, { useRef, useState, useContext } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { UserContext } from '../../utils/UserState'
import CurrentComments from '../CurrentComments/CurrentComments'
// import API from '../../utils/API'

function PostCommentModal(props) {
  const [store, dispatch] = useContext(UserContext)
  // Do I use this here and pass as props or on the modal page where the text box actually is?
  const textRef = useRef()

  function createComment(event, textRef, postId) {
    event.preventDefault()
    const newComment = {
      text: textRef,
      userName: store.profile.name,
      userId: store.user._id,
    }
    console.log(newComment, postId)
    // const updatedPost = postStore.find((p) => p._id === postId)
    // updatedPost.comments = [...updatedPost.comments, newComment]
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
        <div>
          {
            !props.comments ? (
              'No Comments Yet'
            ) : (
              <CurrentComments comments={props.comments} />
            )
            //   ))}
          }
        </div>
        <div className="tab bg-secondary mt-3 mb-1 gradient" id="commentBox">
          <textarea
            ref={textRef}
            id="comment"
            placeholder="Add comment"
            onChange={props.handleInputChange}
          ></textarea>
        </div>
        <Button
          variant="secondary"
          type="button"
          onClick={(e) => {
            createComment(e, textRef.current.value, props.postId)
          }}
        >
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
