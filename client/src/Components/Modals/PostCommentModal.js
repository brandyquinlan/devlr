import React, { useRef, useState, useContext } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { StoreContext } from '../../utils/GlobalState'
import CurrentComments from '../CurrentComments/CurrentComments'
// import API from '../../utils/API'

function PostCommentModal(props) {
  const [store, dispatch] = useContext(StoreContext)
  const [newComment, setNewComment] = useState({
    text: '',
    author: '',
  })

  const userId = store.user._id

  const textRef = useRef()

  function handleInputChange() {
    setNewComment({
      ...newComment,
      text: textRef.current.value,
      author: userId,
    })
  }

  function createComment(event) {
    event.preventDefault()
    const commentData = {
      text: textRef.current.value,
      // I don't actually want the userId here - I'd like the userName from the profile
      // which we should have in the state with the initial get call on the home page, yes?
      author: userId,
    }
    // need to have a profile created first to access the userName before saving
    // also update the main post state in context so it'll show up on the page immediately, right?
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
            onChange={handleInputChange}
          ></textarea>
        </div>
        <Button
          variant="secondary"
          type="button"
          onClick={(e) => {
            createComment(e)
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
