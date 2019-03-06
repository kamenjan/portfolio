import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { ReactBasicScroll } from 'react-basic-scroll'

import deskBgImageXS from './static/bg-desk-xs-dark.jpg'
import deskBgImageSM from './static/bg-desk-sm-dark.jpg'
import deskBgImageMD from './static/bg-desk-md-dark.jpg'
import deskBgImageLG from './static/bg-desk-lg-dark.jpg'
import deskBgImageXL from './static/bg-desk-xl-dark.jpg'

const Container = styled.div`
  height: 220px;
  overflow: hidden;
  position: relative;

  display: flex;
  justify-content: center;
  img {
    position: absolute;
    z-index: -10;

    min-width: 640px;
    height: 330px;
    top: -120px;

    content: url(${deskBgImageXS});

    will-change: transform;
    transform: translateY(var(--ty-img));
  }
`

const ParallaxDivider = props => {
  const config = {
    from: '0',
    to: 'bottom-top',
    props: {
      '--ty-img': {
        from: 0,
        to: '30%',
      },
    },
  }

  return (
    <Container image={props.bgImageRef}>
      <ReactBasicScroll config={config}>
        <img alt={''} />
      </ReactBasicScroll>
    </Container>
  )
}

ParallaxDivider.defaultProps = {
  bgImageRef: 'desk',
}

export default ParallaxDivider
