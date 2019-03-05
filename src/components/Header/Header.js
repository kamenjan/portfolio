import React from 'react'
import styled, { keyframes } from 'styled-components'

import { media } from '../../defines/media'

import headerBgImageXS from './static/bg-header-xs-dark.jpg'
import headerBgImageSM from './static/bg-header-sm-dark.jpg'
import headerBgImageMD from './static/bg-header-md-dark.jpg'
import headerBgImageLG from './static/bg-header-lg-dark.jpg'
import headerBgImageXL from './static/bg-header-xl-dark.jpg'

const headerJSDocLines = [
  { tag: '@name', value: 'Rok Arih', links: [] },
  { tag: '@desc', value: 'Web Developer', links: [] },
  { tag: '@version', value: '3.2.11', links: [] },
  { tag: null, value: null, links: [] },
  {
    tag: '@link',
    value: null,
    links: [
      { displayName: 'mail', href: 'my.mail' },
      { displayName: 'github', href: 'github.com' },
      { displayName: 'linkedin', href: 'linkedin.com' },
    ],
  },
]

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
      min-width: 360px;
      margin-top: 16px;
      margin-left: 34px;
      font-size: 15px;
      line-height: 1.4em;
      color: grey;
    }
  }

  @media ${media.SM} {
    height: 270px;
    #hero-area-container {
      #hero-area-image {
        width: 769px;
        height: 270px;
        top: 0;
        content: url(${headerBgImageSM});
      }
      #hero-area-content {
        margin-top: 22px;
        margin-left: 98px;
        font-size: 16px;
      }
    }
  }
  @media ${media.MD} {
    height: 360px;
    #hero-area-container {
      #hero-area-image {
        width: 1024px;
        height: 360px;
        top: 0;
        content: url(${headerBgImageMD});
      }
      #hero-area-content {
        margin-top: 22px;
        margin-left: 120px;
        font-size: 20px;
      }
    }
  }
  @media ${media.LG} {
    height: 480px;
    #hero-area-container {
      #hero-area-image {
        width: 1680px;
        height: 620px;
        top: -100px;
        content: url(${headerBgImageLG});
      }
      #hero-area-content {
        margin-top: 38px;
        margin-left: 160px;
        font-size: 26px;
      }
    }
  }
  @media ${media.XL} {
    height: 580px;
    #hero-area-container {
      #hero-area-image {
        width: 2000px;
        height: 740px;
        top: -130px;
        content: url(${headerBgImageXL});
      }
      #hero-area-content {
        margin-top: 38px;
        margin-left: 160px;
        font-size: 32px;
      }
    }
  }
  @media (min-width: 2000px) {
    height: 680px;
    #hero-area-container {
      #hero-area-image {
        width: 2600px;
        height: 960px;
        top: -200px;
      }
      #hero-area-content {
        margin-top: 38px;
        margin-left: 130px;
        font-size: 38px;
      }
    }
  }
`
const StyledTag = styled.span`
  color: green;
`
const StyledValue = styled.span`
  color: orange;
`

const Header = props => {
  return (
    <StyledHeader id={'hero-area-mask'}>
      <div id={'hero-area-container'}>
        <img id={'hero-area-image'} />
        <div id={'hero-area-content'}>
          <p>&#47;**</p>
          {headerJSDocLines.map((line, i) => (
            <p key={i}>
              &nbsp;*&nbsp;
              <StyledTag>{line.tag}</StyledTag>
              &nbsp;
              <StyledValue>{line.value}</StyledValue>
              {line.links.map(({ href, displayName }, i) => (
                <React.Fragment key={i}>
                  <a href={href}>{displayName}</a>,&nbsp;
                </React.Fragment>
              ))}
            </p>
          ))}
          <p>&nbsp;*&#47;</p>
        </div>
      </div>
    </StyledHeader>
  )
}

Header.defaultProps = {
  height: '800px',
}

export default Header
