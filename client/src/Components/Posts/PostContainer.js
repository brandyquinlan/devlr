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
          // can this be an array so we can have multiple likes?
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
      ],
      date: 'May 5, 2021',
    },
  ]

  return (
    <div>
      {posts.map((p) => (
        <Tab title={p.title}>
          <PostBox
            key={p.id}
            user={p.user}
            title={p.title}
            body={p.body}
            date={p.date}
            comments={p.comments}
            likes={p.likes}
          />
        </Tab>
      ))}
    </div>
  )
}

export default PostContainer
