import React, { useEffect, useRef } from 'react'
// import * as basicScroll from 'basicscroll'
import styled from 'styled-components'

// import CustomUIElement from './CustomUIElement'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

// const StyledHome = styled.div`
//   background-color: var(--bgcolor);
//   will-change: bgcolor;
// `

const StyledHome = styled.div`
  overflow: hidden;
  will-change: rChannel;
`

const Home = props => {
  const elementRef = useRef()
  // useEffect(() => {
  //   const instance = basicScroll.create({
  //     elem: elementRef.current,
  //     from: 'top-bottom',
  //     to: 'bottom-top',
  //     props: {
  //       '--rChannel': {
  //         from: '0',
  //         to: '200',
  //       },
  //     },
  //   })
  //   instance.start()
  // })

  return (
    <StyledHome ref={elementRef}>
      <Header />
      <Main />
      <Footer />
    </StyledHome>
  )
}

export default Home
