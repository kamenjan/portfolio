import React, { useState } from 'react'

import ThemeContext from '../context/theme'

const withThemeContext = Component => {
  return function WrapperComponent() {
    // Theme state for theme context hook
    const [theme, setTheme] = useState('dark')
    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Component />
      </ThemeContext.Provider>
    )
  }
}

export default withThemeContext
