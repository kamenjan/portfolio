import React, { useEffect, useState } from 'react'

import Portfolio from '../components/Portfolio'

const AppContainer = () => {
  const [viewportDimensions, setViewportDimensions] = useState({
    width: Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0,
    ),
    height: Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0,
    ),
  })

  // TODO: This belongs in redux store
  const [theme, setTheme] = useState('dark')

  const getViewportDimensions = () => {
    setViewportDimensions({
      width: Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0,
      ),
      height: Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0,
      ),
    })
  }

  useEffect(() => {
    window.addEventListener('resize', getViewportDimensions)
    return () => window.removeEventListener('resize', getViewportDimensions)
  }, [])

  return (
    <>
      <Portfolio viewport={viewportDimensions} theme={theme} />
    </>
  )
}

export default React.memo(AppContainer)
