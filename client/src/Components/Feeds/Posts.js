import React, { useContext } from 'react'
import { UserContext } from '../../utils/UserState'
import { PostContext } from '../../utils/PostState'
import { socket } from '../../utils/socket'
import API from '../../utils/API'
import PostContainer from '../Posts/PostContainer'
import Toast from '../../utils/Toast'

export default function Posts({ home }) {
  const [store, dispatch] = useContext(UserContext)
  const [postStore, postDispatch] = useContext(PostContext)

  socket.once('commentOnYourPost', (data) => {
    console.log(data)
    Toast('success', 'success? ', 1000)
    API.getFollowingPosts(store.user._id).then((res) => {
      postDispatch({ type: 'set posts', payload: res })
    })
  })

  return <PostContainer home={home} />
}
