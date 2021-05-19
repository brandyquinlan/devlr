import React, { useContext, useEffect, useState } from 'react'
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
  const [postStore, postDispatch] = useContext(PostContext)
  const [posts, setPosts] = useState([])

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
      avatarUrl: profile.avatarUrl,
    }

    API.post(postData)
      .then(() => {
        API.getFollowingPosts(store.user._id).then((res) => {
          postDispatch({ type: 'set posts', payload: res })
        })
      })
      .catch((err) => {
        Toast(
          'error',
          `We're sorry, we are unable to process this request! Error: ${err}`,
          3000,
        )
      })
  }

  useEffect(() => {
    setPosts(postStore)
  }, [postStore])

  return (
    <div>
      {home ? <NewPostBox createPost={createPost} /> : null}
      {posts && posts.length > 0
        ? [
            posts.map((post, i) => (
              <LazyPostTab key={i} expanded post={post} home={home} />
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
