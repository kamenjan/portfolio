import React, { useState } from 'react'

import ModalContext from '../context/modal'

const withModalContext = Component => {
  return function WrapperComponent() {
    // Theme state for theme context hook
    const [modalOpened, setOpened] = useState(false)
    return (
      <ModalContext.Provider value={{ modalOpened, setOpened }}>
        <Component />
      </ModalContext.Provider>
    )
  }
}

export default withModalContext
