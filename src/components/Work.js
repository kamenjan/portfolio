import React, { useEffect, useRef } from 'react'
// import * as basicScroll from 'basicscroll'
import styled from 'styled-components'

import JSDoc from './JSDoc'

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
      <JSDoc>
        <>@name Termitnjak 2015-2017</>
        <></>
        <>@summary Small company offering B2B and B2C</>
        <>web development, consulting and hosting</>
        <>services to EU and worldwide markets.</>
        <></>
        <>@role Started as a Frontend Developer, but</>
        <>later also assisted on system and cloud</>
        <>administration.</>
        <></>
        <>@responsibilities</>
        <>- advertising campaigns</>
        <>- templating for Plone based projects</>
        <>- wordpress and magento customizations</>
        <>- client management & communication</>
        <>- system & cloud administration</>
        <></>
        <>@projects Archicubator, WAAMMat,</>
        <>MladiPodjetnik, OceanOrchids</>
        <></>
        <>@tags javascript, npm_scripts, jquery,</>
        <>bootstrap, sass, php, python, plone,</>
        <>linux, bash, git, LaTeX, photoshop</>
      </JSDoc>
      <JSDoc>
        <>@name Termitnjak 2015-2017</>
        <></>
        <>@summary Small company offering B2B and B2C</>
        <>web development, consulting and hosting</>
        <>services to EU and worldwide markets.</>
        <></>
        <>@role Started as a Frontend Developer, but</>
        <>later also assisted on system and cloud</>
        <>administration.</>
        <></>
        <>@responsibilities</>
        <>- advertising campaigns</>
        <>- templating for Plone based projects</>
        <>- wordpress and magento customizations</>
        <>- client management & communication</>
        <>- system & cloud administration</>
        <></>
        <>@projects Archicubator, WAAMMat,</>
        <>MladiPodjetnik, OceanOrchids</>
        <></>
        <>@tags javascript, npm_scripts, jquery,</>
        <>bootstrap, sass, php, python, plone,</>
        <>linux, bash, git, LaTeX, photoshop</>
      </JSDoc>
    </StyledHome>
  )
}

export default Home
