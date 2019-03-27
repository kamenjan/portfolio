import React, { useContext } from 'react'
import styled from 'styled-components'
import { ReactBasicScroll } from 'react-basic-scroll'

import { media } from '../../../utils/media'
import ThemeContext from '../../../context/theme'

import deskBgImageXSdark from './static/bg-desk-xs-dark.jpg'
import deskBgImageSMdark from './static/bg-desk-sm-dark.jpg'
import deskBgImageMDdark from './static/bg-desk-md-dark.jpg'
import deskBgImageLGdark from './static/bg-desk-lg-dark.jpg'
import deskBgImageXLdark from './static/bg-desk-xl-dark.jpg'

const bgImages = {
  XS: deskBgImageXSdark,
  SM: deskBgImageSMdark,
  MD: deskBgImageMDdark,
  LG: deskBgImageLGdark,
  XL: deskBgImageXLdark,
}

const Container = styled.img`
  position: absolute;
  z-index: -10;
  width: 640px;
  height: 330px;
  top: -120px;

  content: ${`url(${bgImages.XS})`};

  will-change: transform;
  transform: translateY(var(--ty-img-desk));

  @media ${media.SM} {
    content: ${`url(${bgImages.SM})`};
    width: 820px;
    height: 426px;
    top: -180px;
  }
  @media ${media.MD} {
    content: ${`url(${bgImages.MD})`};
    width: 1090px;
    height: 566px;
    top: -220px;
  }
  @media ${media.LG} {
    content: ${`url(${bgImages.LG})`};
    width: 1800px;
    height: 934px;
    top: -480px;
  }
  @media ${media.XL} {
    content: ${`url(${bgImages.XL})`};
    width: 3070px;
    height: 1593px;
    top: -820px;
  }
`

const Mask = styled.div`
  position: absolute;
  z-index: -10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props =>
    props.theme === 'light' ? 'rgba(43, 26, 47, 0.3)' : 'none'};
`

const Desk = () => {
  const { theme } = useContext(ThemeContext)
  // BasicScroll config
  const config = {
    from: '0',
    to: 'bottom-top',
    props: {
      '--ty-img-desk': {
        from: 0,
        to: '40%',
      },
    },
  }

  return (
    <>
      <ReactBasicScroll config={config}>
        <Container theme={theme} />
      </ReactBasicScroll>
      <Mask theme={theme} />
    </>
  )
}

export default React.memo(Desk)
