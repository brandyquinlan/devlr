import { React, useState, useEffect } from 'react'
import { Collapse } from 'react-bootstrap'
import PostBox from './PostBox'

function PostTab({ post, home, expanded }) {
  const [open, setOpen] = useState(!!expanded)
  const [icon, setIcon] = useState('expand_less')
  const { _id, author, user, title, body, date, avatarUrl, comments, likes, atId, atAvatar, atName } =
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

  useEffect(() => {
    setThisPost(post)
  }, [post])

  return (
    <div className="tab scroll gradient">
      <div className="d-flex flex-row align-items-center justify-content-between">
        {atId === null ? (
          <div>
            <a href={`/profile?user=${user}`}>
              <img
                src={avatarUrl}
                style={{ width: 40, height: 40 }}
                className="devPic float-left mr-3 mt-n2 mb-3"
              ></img>
            </a>
            <span className="h5">{title}</span>
          </div>
        ) : (
          <div className="mb-3">
            <div>
              <a href={`/profile?user=${user}`}>
                <img
                  src={avatarUrl}
                  style={{ width: 40, height: 40 }}
                  className="devPic mr-2 mt-n2 mb-3"
                ></img>
              </a>{' '}
              <span class="material-icons mb-1" style={{ fontSize: '30px' }}>
                next_plan
              </span>{' '}
              <a href={`/profile?user=${atId}`}>
                <img
                  src={atAvatar}
                  style={{ width: 40, height: 40 }}
                  className="devPic mr-3 ml-1 mt-n2 mb-3"
                ></img>
              </a>
            </div>
            <span className="h5">{title}</span>
          </div>

        )}
      </div>
      <div className="separator mb-3"></div>
      <Collapse>
        <PostBox post={thisPost} state={[thisPost, setThisPost]} home={home} />
      </Collapse>
    </div>
  )
}

export default PostTab
