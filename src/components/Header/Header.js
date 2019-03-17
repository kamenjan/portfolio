import React, { useContext } from 'react'

import ThemeContext from '../../context/theme'

import styled from 'styled-components'
import { ReactBasicScroll } from 'react-basic-scroll'
import { media } from '../../utils/media'

import headerBgImageXSdark from './static/bg-header-xs-dark.jpg'
import headerBgImageSMdark from './static/bg-header-sm-dark.jpg'
import headerBgImageMDdark from './static/bg-header-md-dark.jpg'
import headerBgImageLGdark from './static/bg-header-lg-dark.jpg'
import headerBgImageXLdark from './static/bg-header-xl-dark.jpg'

import JSDoc from '../JSDoc/JSDoc'

const bgImages = {
  XS: headerBgImageXSdark,
  SM: headerBgImageSMdark,
  MD: headerBgImageMDdark,
  LG: headerBgImageLGdark,
  XL: headerBgImageXLdark,
}

const Container = styled.div`
  height: 220px;
  overflow: hidden;
  position: relative;

  & > div:first-child {
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
      content: ${`url(${bgImages.XS})`};
      filter: ${({ theme }) =>
        `brightness(${theme === 'light' ? '370' : '100'}%)`};
    }
  }

  @media ${media.SM} {
    height: 270px;
    & > div:first-child {
      img {
        width: 769px;
        height: 270px;
        top: 0;
        content: ${`url(${bgImages.SM})`};
      }
    }
  }
  @media ${media.MD} {
    height: 360px;
    & > div:first-child {
      img {
        width: 1024px;
        height: 360px;
        top: 0;
        content: ${`url(${bgImages.MD})`};
      }
    }
  }
  @media ${media.LG} {
    height: 480px;
    & > div:first-child {
      img {
        width: 1680px;
        height: 620px;
        top: -100px;
        content: ${`url(${bgImages.LG})`};
      }
    }
  }
  @media ${media.XL} {
    height: 580px;
    & > div:first-child {
      img {
        width: 2000px;
        height: 740px;
        top: -130px;
        content: ${`url(${bgImages.XL})`};
      }
    }
  }
  @media (min-width: 2000px) {
    height: 680px;
    & > div:first-child {
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

  span:after {
    color: var(--color-tertiary);
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
    section {
      font-size: 26px;
    }
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

const Header = ({ headerData, name }) => {
  // Theme context
  const { theme } = useContext(ThemeContext)
  // BasicScroll config
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
    <Container theme={theme} name={name}>
      <ReactBasicScroll config={config}>
        <div>
          <img alt={''} />
          <Content>
            <JSDoc docSections={headerData.docSections} />
          </Content>
        </div>
      </ReactBasicScroll>
    </Container>
  )
}

export default React.memo(Header)
