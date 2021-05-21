import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../../utils/UserState'
import { TargetUserContext } from '../../../utils/TargetUserState'
import { PostContext } from '../../../utils/PostState'
import { socket } from '../../../utils/socket'
import API from '../../../utils/API'
import PostContainer from '../Posts/PostContainer'

export default function Posts({ home }) {
  const [store, dispatch] = useContext(UserContext)
  const [postStore, postDispatch] = useContext(PostContext)
  const [targetUser, targetDispatch] = useContext(TargetUserContext)

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

  useEffect(() => {
    loadPosts()
    return () => postDispatch({ type: 'set posts', payload: [] })
  }, [])

  socket.once('update to feed', () => {
    loadPosts()
  })

  return <PostContainer home={home} />
}
