import React, { useRef, useContext } from 'react'
import { Button } from 'react-bootstrap'

function NewPostBox({ createPost }) {
  const titleRef = useRef()
  const bodyRef = useRef()

  return (
    <div>
      <div className="tab bg-secondary mt-2 gradient" id="PostBox">
        <textarea
          ref={titleRef}
          id="postTitle"
          placeholder="Enter Post Title"
          rows="1"
        ></textarea>
        <hr className="m-0"></hr>
        <textarea
          id="postBody"
          ref={bodyRef}
          className="mt-2"
          placeholder="What's on your mind?"
          rows="3"
        ></textarea>
        <Button
          variant="secondary"
          className="gradient"
          type="button"
          size="sm"
          onClick={(e) => {
            createPost(e, titleRef.current.value, bodyRef.current.value)
            titleRef.current.value = ''
            bodyRef.current.value = ''
          }}
        >
          Post
        </Button>
      </div>
    </div>
  )
}

export default NewPostBox
