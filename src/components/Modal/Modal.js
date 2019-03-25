import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  color: var(--color-contrast, #2b2b2b);
`

const Modal = props => {
  return (
    <Container>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius enim
        facilis sapiente sed. Aliquid impedit nobis pariatur quos reprehenderit
        veritatis?
      </p>
    </Container>
  )
}

export default React.memo(Modal)
