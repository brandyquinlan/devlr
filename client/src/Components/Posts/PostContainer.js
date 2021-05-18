import React, { useContext } from 'react'
import { UserContext } from '../../utils/UserState'
import { PostContext } from '../../utils/PostState'
import { TargetUserContext } from '../../utils/TargetUserState'
import API from '../../utils/API'
import LazyPostTab from './LazyPostTab'
import NewPostBox from './NewPostBox'
import Toast from '../../utils/Toast'

function PostContainer({ home }) {
  const [store, dispatch] = useContext(UserContext)
  const [targetUser, targetDispatch] = useContext(TargetUserContext)
  const [posts, postDispatch] = useContext(PostContext)

  let { profile } = targetUser.profile ? targetUser : store

  function createPost(event, title, body) {
    event.preventDefault()
    if (!title || !body) {
      Toast('success', 'Posts require some content, silly', 500)
      return
    }

    const postData = {
      title,
      body,
      author: profile.name,
      user: store.user._id,
    }

    API.post(postData)
      .then((res) => {
        postDispatch({ type: 'set posts', payload: [res, ...posts] })
      })
      .catch((err) => {
        Toast(
          'error',
          `We're sorry, we are unable to process this request! Error: ${err}`,
          3000,
        )
      })
  }

  return (
    <div>
      {home ? <NewPostBox createPost={createPost} /> : null}
      {posts
        ? [
            posts.map((post, i) => (
              <LazyPostTab key={i} title={post.title} expanded post={post} />
            )),
          ]
        : [
            home ? (
              <h5>Make a post to get started</h5>
            ) : (
              <h5>This user has not made any posts yet</h5>
            ),
          ]}
    </div>
  )
}

export default PostContainer
