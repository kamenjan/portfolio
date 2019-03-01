import React from 'react'
import styled, { keyframes } from 'styled-components'

// Header container CSS
const StyledAbout = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
  height: 400px;
  margin-top: 120px;
  text-align: center;
`

const About = props => {
  return (
    <StyledAbout>
      <p className={'about-paragraph'}>
        &#47;** I'm an allround web developer based
        <a href={''}>@Ljubljana</a>. I enjoy building web applications and
        solving programming challenges while having lots of fun in a chaotic
        world of JavaScript.
      </p>
      <p className={'about-paragraph'}>
        I have a strong passion for learning new things and working in teams
        with experienced developers.
      </p>
      <p className={'about-paragraph'}>
        When I'm not building web or solving puzzles on coding sites I like to
        play strategic and fantasy board games. */
      </p>
    </StyledAbout>
  )
}

export default About
