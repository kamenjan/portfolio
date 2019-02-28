import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

import { CommentBlock, BlockTag } from './JSDoc'

const StyledCommunity = styled.div`
  overflow: hidden;
  will-change: rChannel;
`

const Community = props => {
  const elementRef = useRef()
  return (
    <StyledCommunity ref={elementRef}>
      <CommentBlock>
        <>Termitnjak 2015-2017</>
        <>@name Termitnjak 2015-2017</>
      </CommentBlock>
      <CommentBlock>
        <>@name Termitnjak 2015-2017</>
        <>@name Termitnjak 2015-2017</>
      </CommentBlock>
    </StyledCommunity>
  )
}

export default Community
