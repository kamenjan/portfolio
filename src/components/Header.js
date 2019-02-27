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
    <div id='above-the-fold'>
      <div id='header-bg-container' className='background-container'>
        <img id='header-bg-image' className='background-image' />
        <div className='content'>
          <div className='container'>
            <p>/**</p>
            <p>
              &nbsp* <span class='font-secondary'>@name </span>
              <span class='color-tertiary'>Rok Arih</span>
            </p>
            <p>
              &nbsp* <span class='font-secondary'>@desc</span>
              <span class='color-tertiary'>Web Developer</span>
            </p>
            <p>
              &nbsp* <span class='font-secondary'>@version </span>
              <span class='color-tertiary'>3.2.11</span>
            </p>
            <p>&nbsp*</p>
            <p>
              &nbsp*
              <span class='font-secondary'>
                @link{' '}
                <span>
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
            <p>&nbsp*/</p>
          </div>
        </div>
      </div>
      <div id='about' className='section'>
        <div className='content'>
          <div className='container'>
            <div className='dynamic-about-paragraph-container'>
              <p className='about-paragraph'>
                /** I'm an allround web developer based
                <a href=''>@Ljubljana</a>. I enjoy building web applications and
                solving programming challenges while having lots of fun in a
                chaotic world of JavaScript.
              </p>
            </div>
            <div class='dynamic-about-paragraph-container'>
              <p class='about-paragraph'>
                I have a strong passion for learning new things and working in
                teams with experienced developers.
              </p>
            </div>
            <div class='dynamic-about-paragraph-container'>
              <p class='about-paragraph'>
                When I'm not building web or solving puzzles on coding sites I
                like to play strategic and fantasy board games. */
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
