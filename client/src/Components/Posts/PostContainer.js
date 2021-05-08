import React from 'react'
import Tab from '../Tab'
import PostBox from './PostBox'

function PostContainer() {
  // get posts from DB
  // for now here's some dummy text
  const posts = [
    {
      id: 1,
      user: 'liztownd',
      title: 'New Post',
      body: 'So this is my first post! Woohoo!',
      likes: [
        {
          // does this need to be an array so we can have multiple likes?
          // and maybe a count? Or just do a count by doing likes.user.length?
          user: 'katsign',
        },
      ],
      comments: [
        {
          user: 'katsign',
          text: 'This is a crazy idea! I love it!',
          date: Date.now(),
        },
      ],
      date: Date.now(),
    },
    {
      id: 2,
      user: 'liztownd',
      title: 'Great Post',
      body: 'OMG - you guys, this project is the BOMB!',
      likes: [
        {
          user: 'selvivini',
        },
      ],
      comments: [
        {
          user: 'katsign',
          text: 'I know! It is so exciting',
          date: Date.now(),
        },
      ],
      date: Date.now(),
    },
  ]

  return (
    <Tab title="Posts">
      {posts.map((p) => (
        <PostBox
          key={p.id}
          id={p.id}
          user={p.user}
          title={p.title}
          body={p.body}
          date={p.date}
          comments={p.comments}
          likes={p.likes}
        />
      ))}
    </Tab>
  )
}

export default PostContainer
