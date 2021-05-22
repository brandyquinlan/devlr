import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../utils/UserState'
import { PostContext } from '../../../utils/PostState'
import { TargetUserContext } from '../../../utils/TargetUserState'
import API from '../../../utils/API'
import LazyPostTab from './LazyPostTab'
import NewPostBox from './NewPostBox'
import Toast from '../../../utils/Toast'
import { socket } from '../../../utils/socket'

function PostContainer({ home }) {
  const [store, dispatch] = useContext(UserContext)
  const [targetUser, targetDispatch] = useContext(TargetUserContext)
  const [postStore, postDispatch] = useContext(PostContext)
  const [posts, setPosts] = useState([])
  const [userPermission, setUserPermission] = useState(false)

  let { profile } = targetUser.profile ? targetUser : store
  const { followers, following } = store.profile

  function getUserPermission() {
    if (home) return
    try {
      if (
        followers.includes(targetUser.profile.user) &&
        following.includes(targetUser.profile.user)
      )
        setUserPermission(true)
    } catch {
      window.location.href = '/login'
    }
  }

  function createPost(event, title, body) {
    event.preventDefault()
    if (!title || !body) {
      Toast('success', 'Posts require some content, silly', 500)
      return
    }

    let postData = {
      title,
      body,
      atId: null,
      atName: null,
      atAvatar: null,
      author: store.profile.name,
      user: store.user._id,
      avatarUrl: store.profile.avatarUrl,
    }

    if (home === false) {
      ;(postData.atId = targetUser.profile.user),
        (postData.atName = targetUser.profile.name),
        (postData.atAvatar = targetUser.profile.avatarUrl)
    }

    API.post(postData)
      .then(() => {
        API.getFollowingPosts(store.user._id).then((res) => {
          postDispatch({ type: 'set posts', payload: res })
        })
        if (!home && userPermission)
          socket.emit('post email notif', [
            store.profile,
            targetUser.profile.user,
            postData,
          ])
      })
      .catch((err) => {
        Toast('error', `${err}`, 3000)
      })
  }

  useEffect(() => {
    setPosts(postStore)
    getUserPermission()
  }, [postStore])

  return (
    <div>
      {home || userPermission ? (
        <NewPostBox
          createPost={createPost}
          home={home}
          userPermission={userPermission}
        />
      ) : (
        <div className="tab bg-secondary mt-2 gradient">
          To make a post on this user's page you must Follow them and they must
          also Follow you. Click "Browse Users" to the left to start building
          your network!
        </div>
      )}
      {posts && posts.length > 0
        ? [
            posts.map((post, i) => (
              <LazyPostTab key={i} expanded post={post} home={home} />
            )),
          ]
        : [
            home ? (
              <div key="make a post" className="tab bg-secondary mt-2 gradient">
                <h5>Make a post to get started</h5>
              </div>
            ) : (
              <div
                key="this user hasn't posted"
                className="tab bg-secondary mt-2 gradient"
              >
                <h5>This user has not made any posts yet</h5>
              </div>
            ),
          ]}
    </div>
  )
}

export default PostContainer
