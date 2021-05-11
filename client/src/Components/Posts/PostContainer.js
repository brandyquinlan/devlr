import React, { useContext, useState } from 'react'
import { StoreContext } from '../../utils/GlobalState'
import Tab from '../Tab'
import PostBox from './PostBox'

function PostContainer() {
  const [store, dispatch] = useContext(StoreContext)
  // const [postStore, setPost] = useState()

  const userId = store.user._id
  const { userName } = store.profile

  // get posts from DB,
  // then set post state
  // for now here's some dummy text
  const posts = [
    {
      id: 1,
      user: 'liztownd',
      title: 'New Post',
      body: 'So this is my first post! Woohoo!',
      likes: [
        {
          user: 'katsign',
        },
        {
          user: 'liztownd',
        },
      ],
      comments: [
        {
          user: 'katsign',
          text: 'This is a crazy idea! I love it!',
          date: 'May 4, 2021',
        },
      ],
      date: 'May 4, 2021',
    },
    {
      id: 2,
      user: 'liztownd',
      title: 'Great Post',
      body: 'OMG - you guys, this project is the BOMB!',
      //   likes: [
      //     {
      //       user: 'selvivini',
      //     },
      // ],
      comments: [
        {
          user: 'katsign',
          text: 'I know! It is so exciting',
          date: 'May 5, 2021',
        },
        {
          user: 'brandyquinlan',
          text: 'I love it!',
          date: 'May 5, 2021',
        },
      ],
      date: 'May 5, 2021',
    },
  ]

  function createComment(event, textRef, postId) {
    event.preventDefault()
    const newComment = {
      // where/how do I set the postID for this specific comment?
      text: textRef,
      author: userName,
      authorID: userId,
    }

    // send to DB as an update on the post with postID

    // update state?? socket.io?

    console.log(newComment, postId)
    // need to have a profile created first to access the userName before saving
    // also update the main post state in context so it'll show up on the page immediately, right?
  }

  function incrementLike(event, postId) {
    event.preventDefault()
    const newLike = {
      user: userName,
      userId,
    }
    // send to DB as an update on the post with postID
    console.log(newLike, postId)
    // update state - or socket.io?
  }

  return (
    <div>
      {posts.map((p) => (
        <Tab title={p.title}>
          <PostBox
            key={p.id}
            postId={p.id}
            user={p.user}
            title={p.title}
            body={p.body}
            date={p.date}
            comments={p.comments}
            likes={p.likes}
            createComment={createComment}
            incrementLike={incrementLike}
          />
        </Tab>
      ))}
    </div>
  )
}

export default PostContainer
