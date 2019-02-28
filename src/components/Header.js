import React from 'react'
import styled, { keyframes } from 'styled-components'

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

const Header = props => {
  return (
    <div id={'above-the-fold'}>
      <div id={'hero-area-mask'}>
        <div id={'hero-area-container'}>
          <img id={'hero-area-image'} />
          <div id={'hero-area-content'}>
            <p>&#47;**</p>
            <p>
              &nbsp;* <span className={'font-secondary'}>@name </span>
              <span className={'color-tertiary'}>Rok Arih</span>
            </p>
            <p>
              &nbsp;* <span className={'font-secondary'}>@desc</span>
              <span className={'color-tertiary'}>Web Developer</span>
            </p>
            <p>
              &nbsp;* <span className={'font-secondary'}>@version </span>
              <span className={'color-tertiary'}>3.2.11</span>
            </p>
            <p>&nbsp;*</p>
            <p>
              &nbsp;*
              <span className={'font-secondary'}>
                @link{' '}
                <span>
                  <a href=''>mail</a>
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
            <p>&nbsp;*/</p>
          </div>
        </div>
      </div>
      <div id='about' className={'section'}>
        <div className={'content'}>
          <div className={'container'}>
            <p className={'about-paragraph'}>
              &#47;** I'm an allround web developer based
              <a href={''}>@Ljubljana</a>. I enjoy building web applications and
              solving programming challenges while having lots of fun in a
              chaotic world of JavaScript.
            </p>

            <p className={'about-paragraph'}>
              I have a strong passion for learning new things and working in
              teams with experienced developers.
            </p>

            <p className={'about-paragraph'}>
              When I'm not building web or solving puzzles on coding sites I
              like to play strategic and fantasy board games. */
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
