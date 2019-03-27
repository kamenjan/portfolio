import React, { useContext } from 'react'
import styled from 'styled-components'
import { ReactBasicScroll } from 'react-basic-scroll'

import { media } from '../../../utils/media'
import ThemeContext from '../../../context/theme'

import cityBgImageXSdark from './static/bg-city-xs-dark.jpg'
import cityBgImageSMdark from './static/bg-city-sm-dark.jpg'
import cityBgImageMDdark from './static/bg-city-md-dark.jpg'
import cityBgImageLGdark from './static/bg-city-lg-dark.jpg'
import cityBgImageXLdark from './static/bg-city-xl-dark.jpg'

const bgImages = {
  XS: cityBgImageXSdark,
  SM: cityBgImageSMdark,
  MD: cityBgImageMDdark,
  LG: cityBgImageLGdark,
  XL: cityBgImageXLdark,
}

const Container = styled.img`
  position: absolute;
  z-index: -10;
  width: 600px;
  height: 380px;
  top: -170px;

  content: ${`url(${bgImages.XS})`};

  will-change: transform;
  transform: translateY(var(--ty-img-city));

  @media ${media.SM} {
    content: ${`url(${bgImages.SM})`};
    width: 900px;
    height: 565px;
    top: -240px;
  }
  @media ${media.MD} {
    content: ${`url(${bgImages.MD})`};
    width: 1200px;
    height: 753px;
    top: -340px;
  }
  @media ${media.LG} {
    content: ${`url(${bgImages.LG})`};
    width: 1900px;
    height: 1192px;
    top: -480px;
  }
  @media ${media.XL} {
    content: ${`url(${bgImages.XL})`};
    width: 2800px;
    height: 1756px;
    top: -680px;
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

const City = () => {
  const { theme } = useContext(ThemeContext)
  // BasicScroll config
  const config = {
    from: '0',
    to: 'bottom-top',
    props: {
      '--ty-img-city': {
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

export default React.memo(City)
