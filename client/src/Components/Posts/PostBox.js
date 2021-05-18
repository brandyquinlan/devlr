import React, { useState, useContext } from 'react'
import { PostContext } from '../../utils/PostState'
import API from '../../utils/API'
import Likes from './Likes'
import PostCommentModal from '../Modals/PostCommentModal'
import Toast from '../../utils/Toast'

function PostBox({ post, state }) {
  const [commentsModalShow, setCommentsModalShow] = useState(false)
  const [posts, postDispatch] = useContext(PostContext)
  const { postId, author, user, body, date, likes, comments } = post

  const deletePostHandler = (event) => {
    event.preventDefault
    API.removePost(postId)
      .then((data) => {
        const remPost = posts.filter((post) => post._id !== postId)
        postDispatch({ type: 'set posts', payload: remPost })
      })
      .catch(() => Toast('error', "We're sorry, something went wrong", 2000))
  }

  return (
    <div>
      <div id={postId}>
        <p className="mb-1">
          {body}{' '}
          <button type="button" onClick={deletePostHandler}>
            <span className="material-icons pl-3">delete</span>
          </button>
        </p>
        Posted by {author}, {date.split('T')[0]}
        <p className="small" id={user}></p>
      </div>
      <hr className="75" />
      <div className="d-flex justify-content-end vertical-align-center">
        <Likes likes={likes} postId={postId} state={state} />{' '}
        <PostCommentModal
          show={commentsModalShow}
          onHide={() => setCommentsModalShow(false)}
          postId={postId}
          state={state}
        />
        <button
          type="button"
          className="p-0"
          onClick={() => setCommentsModalShow(true)}
        >
          <span className="material-icons pl-3">question_answer</span>
          {!comments ? 0 : comments.length}
        </button>
      </div>
    </div>
  )
}

export default PostBox
