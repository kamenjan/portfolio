import React, { useContext } from 'react'
import styled from 'styled-components'
import { ReactBasicScroll } from 'react-basic-scroll'

import { media } from '../../../defines/media'
import ThemeContext from '../../../context/theme'

import deskBgImageXSdark from './static/bg-desk-xs-dark.jpg'
import deskBgImageSMdark from './static/bg-desk-sm-dark.jpg'
import deskBgImageMDdark from './static/bg-desk-md-dark.jpg'
import deskBgImageLGdark from './static/bg-desk-lg-dark.jpg'
import deskBgImageXLdark from './static/bg-desk-xl-dark.jpg'
import deskBgImageXSlight from './static/bg-desk-xs-light.jpg'
import deskBgImageSMlight from './static/bg-desk-sm-light.jpg'
import deskBgImageMDlight from './static/bg-desk-md-light.jpg'
import deskBgImageLGlight from './static/bg-desk-lg-light.jpg'
import deskBgImageXLlight from './static/bg-desk-xl-light.jpg'

const bgImages = {
  deskBgImageXSdark,
  deskBgImageSMdark,
  deskBgImageMDdark,
  deskBgImageLGdark,
  deskBgImageXLdark,
  deskBgImageXSlight,
  deskBgImageSMlight,
  deskBgImageMDlight,
  deskBgImageLGlight,
  deskBgImageXLlight,
}

const Container = styled.img`
  position: absolute;
  z-index: -10;
  min-width: 640px;
  height: 330px;
  top: -120px;
  content: ${({ theme }) => `url(${bgImages[`deskBgImageXL${theme}`]})`};
  will-change: transform;
  transform: translateY(var(--ty-img));
  @media ${media.SM} {
    min-width: 820px;
    height: 426px;
    top: -180px;
  }
  @media ${media.MD} {
    min-width: 1090px;
    height: 566px;
    top: -220px;
  }
  @media ${media.LG} {
    min-width: 1800px;
    height: 934px;
    top: -480px;
  }
  @media ${media.XL} {
    min-width: 3070px;
    height: 1593px;
    top: -820px;
  }
`

const Desk = () => {
  const { theme } = useContext(ThemeContext)
  // BasicScroll config
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
    <ReactBasicScroll config={config}>
      <Container theme={theme} />
    </ReactBasicScroll>
  )
}

export default Desk
