import React from 'react'
import styled, { keyframes } from 'styled-components'

import avatar from '../static/avatar.png'
import headerBgImage from '../static/meetup.jpg'

// Header container CSS
const StyledHeader = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
  height: 400px;
  margin-top: 120px;
  text-align: center;
`

// Slide CSS animation
const slideFrames = from => keyframes`
  from { transform: 
    translate3d( ${from.x || 0}px, ${from.y || 0}px, 0px );
    opacity: 0;
  }
  to { 
    transform: translate3d(0px, 0px, 0px);
    opacity: 1; 
   }
`

// Slide styled div element
const Slide = styled.div`
  display: inline-block;
  vertical-align: middle;
  font-size: 62px;
  animation: ${props => slideFrames(props.from)} 1.4s ease-out;
`

// Avatar styled img element
const Avatar = styled.img`
  height: 200px;
`

const Header = props => {
  return (
    <div className={'header-wrapper'}>
      <div className='background' />
      <StyledHeader>
        <Slide from={{ x: -700 }}>Rok</Slide>
        <Slide from={{ y: -700 }}>
          <Avatar src={avatar} alt='' />
        </Slide>
        <Slide from={{ x: 700 }}>Arih</Slide>
      </StyledHeader>
    </div>
  )
}

export default Header
