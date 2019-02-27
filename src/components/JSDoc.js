import React from 'react'
import styled from 'styled-components'

const StyledJSDoc = styled.div`
  overflow: hidden;
  will-change: rChannel;
  p {
    margin: 0;
  }
`

const JSDoc = props => {
  return (
    <StyledJSDoc>
      <p>&#47;**</p>
      {props.children.map(child => (
        <p>&nbsp;* {child}</p>
      ))}
      <p>&nbsp;*&#47;</p>
    </StyledJSDoc>
  )
}

export default React.memo(JSDoc)
