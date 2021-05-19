import React, { useState, useContext, useEffect } from 'react'
import { PostContext } from '../../utils/PostState'
import { UserContext } from '../../utils/UserState'
import API from '../../utils/API'
import Likes from './Likes'
import PostCommentModal from '../Modals/PostCommentModal'
import DeletePostModal from '../Modals/DeletePostModal'
import Toast from '../../utils/Toast'
import dayjs from 'dayjs'

function PostBox({ post, state, home }) {
  const [posts, postDispatch] = useContext(PostContext)
  const [store, dispatch] = useContext(UserContext)
  const [commentsModalShow, setCommentsModalShow] = useState(false)
  const [delPostModalShow, setDelPostModalShow] = useState(false)
  const [isOwned, setIsOwned] = useState(false)
  const { postId, author, user, body, date, likes, comments } = post

  const deletePostHandler = (event) => {
    event.preventDefault
    API.removePost(postId)
      .then(() => {
        const remPost = posts.filter((post) => post._id !== postId)
        postDispatch({ type: 'set posts', payload: remPost })
      })
      .catch(() => Toast('error', "We're sorry, something went wrong", 2000))
  }

  useEffect(() => {
    if (user === store.user._id) setIsOwned(true)
  }, [store])

  return (
    <div>
      <div id={postId}>
        <p className="mb-1">{body} </p>
        <p className="small" id={user}>
          {' '}
          Posted by <a href={`/profile?user=${user}`}>{author}</a>, {dayjs(date).format(`HH:mm - M-DD-YY`)}
        </p>
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
        {home && isOwned ? (
          <>
            <DeletePostModal
              show={delPostModalShow}
              hide={() => setDelPostModalShow(false)}
              deletePost={deletePostHandler}
            />
            <button type="button" onClick={() => setDelPostModalShow(true)}>
              <span className="material-icons pl-3">delete</span>
            </button>
          </>
        ) : null}
      </div>
    </div>
  )
}

export default PostBox
