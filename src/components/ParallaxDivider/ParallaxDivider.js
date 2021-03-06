import React from 'react'
import styled from 'styled-components'
import { media } from '../../utils/media'

const Container = styled.div`
  height: 220px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;

  //margin: 42px 0;
  @media ${media.SM} {
    height: 270px;
  }
  @media ${media.MD} {
    height: 360px;
  }
  @media ${media.LG} {
    height: 480px;
  }
  @media ${media.XL} {
    height: 580px;
  }
`

const ParallaxDivider = props => <Container>{props.children}</Container>

export default React.memo(ParallaxDivider)
