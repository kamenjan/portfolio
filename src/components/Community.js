import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

import JSDoc from './JSDoc'

const StyledCommunity = styled.div`
  overflow: hidden;
  will-change: rChannel;
`

const Community = props => {
  const elementRef = useRef()
  return (
    <StyledCommunity ref={elementRef}>
      <JSDoc>
        <>@name Termitnjak 2015-2017</>
        <>@name Termitnjak 2015-2017</>
      </JSDoc>
      <JSDoc>
        <>@name Termitnjak 2015-2017</>
        <>@name Termitnjak 2015-2017</>
      </JSDoc>
    </StyledCommunity>
  )
}

export default Community
