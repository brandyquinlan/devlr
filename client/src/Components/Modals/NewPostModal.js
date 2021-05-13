import React, { useRef, useState, useContext } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { UserContext } from '../../utils/UserState'
import API from '../../utils/API'

function NewPostModal(props) {
  const [store, dispatch] = useContext(UserContext)

  const userId = store.user._id
  const userName = store.profile.name
  const titleRef = useRef()
  const bodyRef = useRef()

  function createPost(event) {
    event.preventDefault()
    const postData = {
      title: titleRef.current.value,
      body: bodyRef.current.value,
      author: userName,
      user: userId,
    }
    console.log(postData)

    API.post(postData)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        throw new Error('error saving post', err)
      })
  }

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">New Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="tab bg-secondary mt-3 mb-1 gradient" id="modalPostBox">
          <textarea
            ref={titleRef}
            id="postTitle"
            placeholder="Enter Post Title"
            // onChange={handleInputChange}
            rows="1"
          ></textarea>
          <hr className="m-0"></hr>
          <textarea
            id="postBody"
            ref={bodyRef}
            className="mt-1"
            placeholder="What's on your mind?"
            // onChange={handleInputChange}
            rows="5"
          ></textarea>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          type="button"
          onClick={(e) => {
            createPost(e)
            props.onHide()
          }}
        >
          Save
        </Button>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default NewPostModal
