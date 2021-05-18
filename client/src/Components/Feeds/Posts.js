import React, { useContext } from 'react'
import { TargetUserContext } from '../../utils/TargetUserState'
import PostContainer from '../Posts/PostContainer'

function Posts() {
  const [targetUser, targetDispatch] = useContext(TargetUserContext)

  return targetUser._id ? <PostContainer home={false} /> : <PostContainer />
}
export default Posts
