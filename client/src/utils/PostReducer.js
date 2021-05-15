import API from './API'

function PostReducer(state, action) {
  switch (action.type) {
    case 'get posts':
      return {
        posts: action.payload,
      }
    case 'new post':
      return {
        ...state,
        posts: action.payload,
      }
    case 'add comment':
      return {
        ...state,
        posts: action.payload,
      }
    case 'add like':
      return {
        ...state,
        posts: action.payload,
      }
    default:
      throw new Error('something went wrong with PostReducer switch case')
  }
}

export default PostReducer
