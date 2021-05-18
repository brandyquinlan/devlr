import { React, useState, useEffect } from 'react'
import { Collapse } from 'react-bootstrap'
import PostBox from './PostBox'

function PostTab({ post, home, expanded }) {
  const [open, setOpen] = useState(!!expanded)
  const [icon, setIcon] = useState('expand_less')
  const { _id, author, user, title, body, date, comments, likes } = post

  const [thisPost, setThisPost] = useState({
    _id,
    author,
    user,
    title,
    body,
    date,
    comments,
    likes,
  })

  useEffect(() => {
    setThisPost(post)
  }, [post])

  return (
    <div className="tab scroll gradient">
      <div className="d-flex flex-row align-items-center justify-content-between">
        <h5>{thisPost.title}</h5>
      </div>
      <div className="separator mb-3"></div>
      <Collapse>
        <PostBox post={thisPost} state={[thisPost, setThisPost]} home={home} />
      </Collapse>
    </div>
  )
}

export default PostTab
