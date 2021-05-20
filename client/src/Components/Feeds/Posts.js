import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../utils/UserState'
import { TargetUserContext } from '../../utils/TargetUserState'
import { PostContext } from '../../utils/PostState'
import { socket } from '../../utils/socket'
import API from '../../utils/API'
import PostContainer from '../Posts/PostContainer'

export default function Posts({ home }) {
  const [store, dispatch] = useContext(UserContext)
  const [postStore, postDispatch] = useContext(PostContext)
  const [targetUser, targetDispatch] = useContext(TargetUserContext)
  const [room, setRoom] = useState('')

  const homeOrAway = home ? 'home' : 'away'

  useEffect(() => {
    targetUser?.profile?.user
      ? setRoom(targetUser.profile.user)
      : setRoom(store.user._id)

    socket.emit('join room', { room })
  }, [store, targetUser])

  socket.once('update to feed', () => {
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
        throw new Error()
    }
  })

  return <PostContainer home={home} />
}
