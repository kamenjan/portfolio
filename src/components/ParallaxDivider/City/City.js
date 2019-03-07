import React, { useContext } from 'react'
import styled from 'styled-components'
import { ReactBasicScroll } from 'react-basic-scroll'

import ThemeContext from '../../../context/theme'

import cityBgImageXSdark from './static/bg-city-xs-dark.jpg'
import cityBgImageSMdark from './static/bg-city-sm-dark.jpg'
import cityBgImageMDdark from './static/bg-city-md-dark.jpg'
import cityBgImageLGdark from './static/bg-city-lg-dark.jpg'
import cityBgImageXLdark from './static/bg-city-xl-dark.jpg'
import cityBgImageXSlight from './static/bg-city-xs-light.jpg'
import cityBgImageSMlight from './static/bg-city-sm-light.jpg'
import cityBgImageMDlight from './static/bg-city-md-light.jpg'
import cityBgImageLGlight from './static/bg-city-lg-light.jpg'
import cityBgImageXLlight from './static/bg-city-xl-light.jpg'
import { media } from '../../../defines/media'

const bgImages = {
  cityBgImageXSdark,
  cityBgImageSMdark,
  cityBgImageMDdark,
  cityBgImageLGdark,
  cityBgImageXLdark,
  cityBgImageXSlight,
  cityBgImageSMlight,
  cityBgImageMDlight,
  cityBgImageLGlight,
  cityBgImageXLlight,
}

const Container = styled.img`
  position: absolute;
  z-index: -10;
  width: 600px;
  height: 380px;
  top: -90px;
  left: 0;
  content: ${({ theme }) => `url(${bgImages[`cityBgImageXL${theme}`]})`};
  will-change: transform;
  transform: translateY(var(--ty-img));
  @media ${media.SM} {
    width: 900px;
    height: 565px;
    top: -140px;
    left: 0;
  }
  @media ${media.MD} {
    width: 1200px;
    height: 753px;
    top: -180px;
    left: 0;
  }
  @media ${media.LG} {
    width: 1900px;
    height: 1192px;
    top: -260px;
    left: 0;
  }
  @media ${media.XL} {
    width: 2800px;
    height: 1756px;
    top: -1080px;
    left: 0;
  }
`

const City = () => {
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

export default City
