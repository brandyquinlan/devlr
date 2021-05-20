import { React, useState, useEffect, useContext } from 'react'
import { Collapse } from 'react-bootstrap'
import { UserContext } from '../../utils/UserState'
import PostBox from './PostBox'

function PostTab({ post, home, expanded }) {
  const [store, dispatch] = useContext(UserContext)
  const [open, setOpen] = useState(!!expanded)
  const [icon, setIcon] = useState('expand_less')
  const { _id, author, user, title, body, date, avatarUrl, comments, likes } =
    post
  const [thisPost, setThisPost] = useState({
    _id,
    author,
    user,
    title,
    body,
    date,
    avatarUrl,
    comments,
    likes,
  })

  const href =
    thisPost.user === store.user._id ? '/home' : `/profile?user=${user}`

  useEffect(() => {
    setThisPost(post)
  }, [post])

  return (
    <div className="tab scroll gradient">
      <div className="d-flex flex-row align-items-center justify-content-between">
        <div>
          <a href={href}>
            <img
              src={avatarUrl}
              style={{ width: 40, height: 40 }}
              className="devPic float-left mr-3 mt-n2 mb-3"
            ></img>
          </a>
          <span className="h5">{title}</span>
        </div>
      </div>
      <div className="separator mb-3"></div>
      <Collapse>
        <PostBox post={thisPost} state={[thisPost, setThisPost]} home={home} />
      </Collapse>
    </div>
  )
}

export default PostTab
