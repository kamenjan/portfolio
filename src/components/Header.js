import React from 'react'
import styled, { keyframes } from 'styled-components'

import headerBgImageXS from '../static/images/bg-header-xs-dark.jpg'
import headerBgImageXL from '../static/images/bg-header-xl-dark.jpg'

// Header container CSS
const StyledHeader = styled.div`
  --ty-header: 0;

  height: 220px;
  overflow: hidden;
  position: relative;

  #hero-area-container {
    width: 100%;
    display: flex;
    justify-content: center;
    will-change: transform;
    transform: translateY(var(--ty-header));

    #hero-area-image {
      position: absolute;
      z-index: -10;
      min-width: 469px;
      height: 330px;
      top: -40px;
      content: url(${headerBgImageXS});
    }

    #hero-area-content {
      position: absolute;
      z-index: -10;
      width: 360px;
      will-change: transform;
    }
  }
`

const Header = props => {
  return (
    <StyledHeader id={'hero-area-mask'}>
      <div id={'hero-area-container'}>
        <img id={'hero-area-image'} alt={'hero-area-image'} />
        <div id={'hero-area-content'}>
          <p>&#47;**</p>
          <p>
            &nbsp;* <span className={'font-secondary'}>@name </span>
            <span className={'color-tertiary'}>Rok Arih</span>
          </p>
          <p>
            &nbsp;* <span className={'font-secondary'}>@desc</span>
            <span className={'color-tertiary'}>Web Developer</span>
          </p>
          <p>
            &nbsp;* <span className={'font-secondary'}>@version </span>
            <span className={'color-tertiary'}>3.2.11</span>
          </p>
          <p>&nbsp;*</p>
          <p>
            &nbsp;*
            <span className={'font-secondary'}>
              @link{' '}
              <span>
                <a href=''>mail</a>
                <a href=''>mail</a>
              </span>
              ,{' '}
              <span>
                <a href=''>github</a>
              </span>
              ,{' '}
              <span>
                <a href=''>linkedin</a>
              </span>
            </span>
          </p>
          <p>&nbsp;*/</p>
        </div>
      </div>
    </StyledHeader>
  )
}

export default Header
