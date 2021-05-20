import React, { createContext, useReducer } from 'react'

import ModalReducer from './ModalReducer'

const initialState = {
  userModalShow: false,
  profileModalShow: false,
  initialModalShow: false,
  initialLogin: false,
}

const ModalProvider = ({ children }) => {
  const [modals, modalDispatch] = useReducer(ModalReducer, initialState)

  return (
    <ModalContext.Provider value={[modals, modalDispatch]}>
      {children}
    </ModalContext.Provider>
  )
}

export const ModalContext = createContext(initialState)
export default ModalProvider
