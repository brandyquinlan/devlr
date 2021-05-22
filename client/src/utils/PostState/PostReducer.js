export default function PostReducer(state, action) {
  switch (action.type) {
    case 'set posts':
      return action.payload
    default:
      throw new Error('Something broke in TargetUser reducer')
  }
}
