import React from 'react'
import styled from 'styled-components'

const StyledJSDoc = styled.div`
  overflow: hidden;
  will-change: rChannel;
  font-size: 22px;
  color: grey;
  p {
    margin: 0;
    color: white;
  }
`

const CommentBlock = props => {
  return (
    <StyledJSDoc>
      <p>&#47;**</p>
      {props.children.map((child, i) => (
        <p key={i}>&nbsp;* {child}</p>
      ))}
      <p>&nbsp;*&#47;</p>
    </StyledJSDoc>
  )
}

const BlockTag = styled.span`
  color: green;
`

// TODO: Figure out how to memoize named exports vs default exports
export { CommentBlock, BlockTag }
// export default React.memo(CommentBlock)
