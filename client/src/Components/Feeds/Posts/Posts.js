import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../../utils/UserState'
import { TargetUserContext } from '../../../utils/TargetUserState'
import { PostContext } from '../../../utils/PostState'
import { socket } from '../../../utils/socket'
import API from '../../../utils/API'
import PostContainer from '../Posts/PostContainer'
import Loading from '../../Loading'

export default function Posts({ home }) {
  const [store, dispatch] = useContext(UserContext)
  const [postStore, postDispatch] = useContext(PostContext)
  const [targetUser, targetDispatch] = useContext(TargetUserContext)
  const [resfreshing, setRefreshing] = useState(false)

  const homeOrAway = home ? 'home' : 'away'

  function loadPosts() {
    switch (homeOrAway) {
      case 'home':
        API.getFollowingPosts(store.user._id).then((res) => {
          postDispatch({ type: 'set posts', payload: res })
        })
        break
      case 'away':
        API.getPosts(targetUser.profile.user).then((res) => {
          postDispatch({ type: 'set posts', payload: res })
        })
        break
      default:
        throw new Error('Error loading posts --- Feeds/Post.js')
    }
  }

  function refreshFeed(event) {
    event.preventDefault()

    setRefreshing(true)
    loadPosts()
    setTimeout(() => {
      setRefreshing(false)
    }, 250)
  }

  useEffect(() => {
    loadPosts()
    return () => postDispatch({ type: 'set posts', payload: [] })
  }, [])

  socket.once('update to feed', () => {
    loadPosts()
  })

  return (
    <>
      <div
        className="btn btn-secondary gradient mb-2"
        style={{ border: 'none' }}
      >
        <a onClick={refreshFeed}>
          <span className="material-icons m-0" style={{ fontSize: '18px' }}>
            refresh
          </span>{' '}
          <span>Refresh Feed</span>
        </a>
      </div>
      {refreshing ? <Loading /> : <PostContainer home={home} />}
    </>
  )
}
