import React, { useContext } from 'react'
import PostContainer from '../Posts/PostContainer'
import { TargetUserContext } from '../../utils/TargetUserState'

function Posts() {
  const [targetUser, targetDispatch] = useContext(TargetUserContext)

  return targetUser._id ? <PostContainer home={false} /> : <PostContainer />
}

export default Posts
