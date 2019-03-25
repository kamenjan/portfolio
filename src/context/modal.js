import React from 'react'
const ModalContext = React.createContext({
  modalOpened: false,
  setOpened: () => {},
})
export default ModalContext
