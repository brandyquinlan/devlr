export default function Reducer(state, action) {
  switch (action.type) {
    case 'set target':
      return action.payload
    default:
      throw new Error('Something broke in TargetUser reducer')
  }
}
