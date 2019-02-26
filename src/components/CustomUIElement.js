import React, { useEffect, useState, useRef } from 'react'

import * as basicScroll from 'basicscroll'
import styled from 'styled-components'

import { compose } from '../utils/functional'

// Describing a composable styled component
const WithStyle = component => styled(component)`
  background-color: ${props => props.backgroundColor || 'blue'};
  height: 200px;
  width: 200px;
  transform: translateX(var(--ty)) rotate(var(--rotate));
  will-change: translateX, rotate;
`

const scrollConfig = el => ({
  elem: el,
  from: '0',
  to: 'bottom-top',
  props: {
    '--rotate': { from: '0', to: '1turn' },
    '--ty': { from: '0', to: '1000px' },
  },
})

const CustomUIElement = props => {
  const elementRef = useRef()
  let instance = null
  useEffect(() => {
    if (!instance) {
      instance = basicScroll.create(scrollConfig(elementRef.current))
      instance.start()
    }
    // useEffect can return a custom onComponentUnmount function
    return () => instance.destroy()
  }, []) // Use [] subscriber to emulate onMount so that the useEffect hook
  // does not get called on each re-render
  return <div ref={elementRef} {...props} />
}

export default compose(
  WithStyle,
  React.memo,
)(CustomUIElement)
