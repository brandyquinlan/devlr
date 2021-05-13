import React, { createContext, useReducer } from 'react'

function ModalReducer(state, action) {
  switch (action.type) {
    case 'show user modal':
      return {
        ...state,
        userModalShow: true,
      }
    case 'hide user modal':
      return {
        ...state,
        userModalShow: false,
      }
    case 'show profile modal':
      return {
        ...state,
        profileModalShow: true,
      }
    case 'hide profile modal':
      return {
        ...state,
        profileModalShow: false,
      }
    case 'show initial modal':
      return {
        ...state,
        initialModalShow: true,
      }
    case 'hide inital modal':
      return {
        ...state,
        initialModalShow: false,
      }
    case 'lets go':
      return {
        ...state,
        profileModalShow: true,
        initialModalShow: false,
      }
    default:
      throw new Error('Error in Modal Reducer')
  }
}

const initialState = {
  userModalShow: false,
  profileModalShow: false,
  initialModalShow: false,
}

const ModalProvider = ({ children }) => {
  const [modals, updateModal] = useReducer(ModalReducer, initialState)

  return (
    <ModalContext.Provider value={[modals, updateModal]}>
      {children}
    </ModalContext.Provider>
  )
}

export const ModalContext = createContext(initialState)
export default ModalProvider
