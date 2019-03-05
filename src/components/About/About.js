import React from 'react'
import styled, { keyframes } from 'styled-components'

import { media } from '../../defines/media'

// Header container CSS
const StyledAbout = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;

  .about-paragraph {
    margin-top: 24px;
    margin-bottom: 24px;
    max-width: 360px;
    padding: 0 8px;

    color: var(--color-contrast, #2b2b2b);
    font-size: 14px;
    line-height: 1.6em;
  }

  @media ${media.SM} {
    .about-paragraph {
      max-width: 470px;
      font-size: 16px;
    }
  }
  @media ${media.MD} {
    .about-paragraph {
      max-width: 768px;
      font-size: 18px;
    }
  }
  @media ${media.LG} {
    .about-paragraph {
      max-width: 1024px;
      font-size: 20px;
    }
  }
  @media ${media.XL} {
    .about-paragraph {
      max-width: 1280px;
      font-size: 22px;
    }
  }
`

const About = props => {
  return (
    <StyledAbout>
      <p className={'about-paragraph'}>
        &#47;** I'm an allround web developer based <a href={''}>@Ljubljana</a>.
        I enjoy building web applications and solving programming challenges
        while having lots of fun in a chaotic world of JavaScript.
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
