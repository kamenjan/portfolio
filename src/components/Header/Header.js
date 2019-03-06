import React from 'react'
import styled, { keyframes } from 'styled-components'
import { ReactBasicScroll } from 'react-basic-scroll'

import { media, size } from '../../defines/media'

import headerBgImageXSdark from './static/bg-header-xs-dark.jpg'
import headerBgImageSMdark from './static/bg-header-sm-dark.jpg'
import headerBgImageMDdark from './static/bg-header-md-dark.jpg'
import headerBgImageLGdark from './static/bg-header-lg-dark.jpg'
import headerBgImageXLdark from './static/bg-header-xl-dark.jpg'
import headerBgImageXSlight from './static/bg-header-xs-light.jpg'
import headerBgImageSMlight from './static/bg-header-sm-light.jpg'
import headerBgImageMDlight from './static/bg-header-md-light.jpg'
import headerBgImageLGlight from './static/bg-header-lg-light.jpg'
import headerBgImageXLlight from './static/bg-header-xl-light.jpg'

const bgImages = {
  headerBgImageXSdark,
  headerBgImageSMdark,
  headerBgImageMDdark,
  headerBgImageLGdark,
  headerBgImageXLdark,
  headerBgImageXSlight,
  headerBgImageSMlight,
  headerBgImageMDlight,
  headerBgImageLGlight,
  headerBgImageXLlight,
}

const Container = styled.div`
  //--ty-header: 0;

  height: 220px;
  overflow: hidden;
  position: relative;

  div:first-child {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    will-change: transform;
    transform: translateY(var(--ty-header));

    img {
      position: absolute;
      z-index: -10;
      min-width: 469px;
      height: 330px;
      top: -40px;
      content: ${({ theme }) => `url(${bgImages[`headerBgImageXS${theme}`]})`};
    }
  }

  @media ${media.SM} {
    height: 270px;
    div:first-child {
      img {
        width: 769px;
        height: 270px;
        top: 0;
        content: ${({ theme }) =>
          `url(${bgImages[`headerBgImageSM${theme}`]})`};
      }
    }
  }
  @media ${media.MD} {
    height: 360px;
    div:first-child {
      img {
        width: 1024px;
        height: 360px;
        top: 0;
        content: ${({ theme }) =>
          `url(${bgImages[`headerBgImageMD${theme}`]})`};
      }
    }
  }
  @media ${media.LG} {
    height: 480px;
    div:first-child {
      img {
        width: 1680px;
        height: 620px;
        top: -100px;
        content: ${({ theme }) =>
          `url(${bgImages[`headerBgImageLG${theme}`]})`};
      }
    }
  }
  @media ${media.XL} {
    height: 580px;
    div:first-child {
      img {
        width: 2000px;
        height: 740px;
        top: -130px;
        content: ${({ theme }) =>
          `url(${bgImages[`headerBgImageXL${theme}`]})`};
      }
    }
  }
  @media (min-width: 2000px) {
    height: 680px;
    div:first-child {
      img {
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
const Content = styled.div`
  position: absolute;
  z-index: -10;
  min-width: 360px;
  margin-top: 16px;
  margin-left: 34px;
  font-size: 15px;
  line-height: 1.4em;
  color: grey;

  &:before {
    display: block;
    content: '/**';
  }

  &:after {
    display: block;
    content: ' */';
    white-space: pre;
  }

  @media ${media.SM} {
    margin-top: 22px;
    margin-left: 98px;
    font-size: 16px;
  }
  @media ${media.MD} {
    margin-top: 22px;
    margin-left: 120px;
    font-size: 20px;
  }
  @media ${media.LG} {
    margin-top: 38px;
    margin-left: 160px;
    font-size: 26px;
  }
  @media ${media.XL} {
    margin-top: 38px;
    margin-left: 160px;
    font-size: 32px;
  }
  @media (min-width: 2000px) {
    margin-top: 38px;
    margin-left: 130px;
    font-size: 38px;
  }
`
const JSDocLine = styled.p`
  &:before {
    content: ' * ';
    white-space: pre;
  }
  a:after {
    content: ' ';
    white-space: pre;
  }
`
const Tag = styled.span`
  color: green;
  &:after {
    content: ' ';
    white-space: pre;
  }
`
const Value = styled.span`
  color: orange;
`

const Header = ({ headerContent, theme }) => {
  const config = {
    from: 'top-top',
    to: 'bottom-top',
    props: {
      '--ty-header': {
        from: 0,
        to: '15%',
      },
    },
  }

  return (
    <Container theme={theme}>
      <ReactBasicScroll config={config}>
        <div>
          <img alt={''} />
          <Content>
            {headerContent.map((line, i) => (
              <JSDocLine key={i}>
                <Tag>{line.tag}</Tag>
                <Value>{line.value}</Value>
                {line.links.map(({ href, displayName }, i) => (
                  <a href={href} key={i}>
                    {displayName}
                  </a>
                ))}
              </JSDocLine>
            ))}
          </Content>
        </div>
      </ReactBasicScroll>
    </Container>
  )
}

Header.defaultProps = {
  headerContent: [
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
  ],
}

export default Header
