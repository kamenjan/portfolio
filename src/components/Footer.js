import React from 'react'

import styled from 'styled-components'

const StyledFooter = styled.div`
  color: palevioletred;
  font-weight: bold;
`

const Footer = props => {
  return (
    <StyledFooter>
      <h1>Footer</h1>
    </StyledFooter>
  )
}

export default Footer
