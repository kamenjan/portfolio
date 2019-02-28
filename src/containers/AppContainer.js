import React, { useEffect, useState } from 'react'

import { createGlobalStyle } from 'styled-components/macro'

import Header from '../components/Header'
import Stack from '../components/Stack'
import Work from '../components/Work'
import Community from '../components/Community'
import Menu from '../components/Menu'

const GlobalStyle = createGlobalStyle`
  body {
    color: #DDD;
    background-color: #444;
  }
`

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
      <div>{viewportDimensions.width}</div>
      <div>{viewportDimensions.height}</div>
      <Header />
      <Stack />
      <Work />
      <Community />
      <GlobalStyle />
      <Menu viewport={viewportDimensions} />
    </>
  )
}

export default React.memo(AppContainer)
