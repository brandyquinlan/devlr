import React, { useState, useContext, useEffect } from 'react'
import PostContainer from '../Posts/PostContainer'
import { PostContext } from '../../utils/PostState'
import { UserContext } from '../../utils/UserState'
import API from '../../utils/API'

function Activity({ posts, createComment, createPost, incrementLike }) {
  // const [postStore, dispatchPost] = useContext(PostContext)
  // const [store, dispatch] = useContext(UserContext)
  // const [loadingData, setLoadingData] = useState(true)

  // useEffect(() => {
  //   const posts = (postStore)
  // }, [postStore])

  // function createPost(event, title, body) {
  //   event.preventDefault()
  //   const postData = {
  //     title,
  //     body,
  //     author: store.profile.name,
  //     user: store.user._id,
  //   }

  //   API.post(postData)
  //     .then((res) => {
  //       dispatchPost({ type: 'new post', payload: postData })
  //       console.log('inside setPosts after new post', postStore)
  //       console.log(res)
  //     })
  //     .catch((err) => {
  //       // throw new Error('error saving post', err)
  //       console.log(err)
  //     })
  // }

  // function createComment(event, textRef, postId) {
  //   event.preventDefault()
  //   const newComment = {
  //     text: textRef,
  //     userName: store.profile.name,
  //     userId: store.user._id,
  //   }
  //   console.log(newComment, postId)
  //   const updatedPost = postStore.find((p) => p._id === postId)
  //   updatedPost.comments = [...updatedPost.comments, newComment]
  //   dispatchPost({ type: 'add comment', payload: updatedPost })
  // }

  // function incrementLike(event, postId) {
  //   event.preventDefault()
  //   const newLike = {
  //     postID: postId,
  //     like: {
  //       user: store.user._id,
  //       userName: store.profile.name,
  //     },
  //   }
  //   // send to DB as an update on the post with postID
  //   console.log(newLike)
  //   API.addLike(newLike)
  //     .then((res) => {
  //       console.log(res)
  //     })
  //     .catch((err) => {
  //       console.error('Failed to add like', err)
  //     })

  //   // socket.io?
  // }

  return (
    <>
      {/* {loadingData ? (
        <PostContainer>Please wait while we get your posts...</PostContainer>
      ) : ( */}
      <PostContainer
        posts={posts}
        createPost={createPost}
        createComment={createComment}
        incrementLike={incrementLike}
      />
      {/* )} */}
    </>
  )
}

export default Activity
