import React from 'react'
import styled, { keyframes } from 'styled-components'

import { media } from '../../defines/media'

// Header container CSS
const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;

  max-width: 360px;
  margin-left: auto;
  margin-right: auto;

  p {
    margin-top: 24px;
    margin-bottom: 24px;
    padding: 0 8px;

    color: var(--color-contrast, #2b2b2b);
    font-size: 14px;
    line-height: 1.6em;
  }

  p:first-child:before {
    content: '/** ';
  }

  p:last-child:after {
    content: ' */';
  }

  @media ${media.SM} {
    max-width: 470px;
    p {
      font-size: 16px;
    }
  }
  @media ${media.MD} {
    max-width: 768px;
    p {
      font-size: 18px;
    }
  }
  @media ${media.LG} {
    max-width: 1024px;
    p {
      font-size: 20px;
    }
  }
  @media ${media.XL} {
    max-width: 1280px;
    p {
      font-size: 22px;
    }
  }
`

const About = props => {
  return (
    <Container>
      <p>
        I'm an allround web developer based{' '}
        <a href={'https://en.wikipedia.org/wiki/Ljubljana'}>@Ljubljana</a>. I
        enjoy building web applications and solving programming challenges while
        having lots of fun in a chaotic world of JavaScript.
      </p>
      <p>
        I have a strong passion for learning new things and working in teams
        with experienced developers.
      </p>
      <p>
        When I'm not building web or solving puzzles on coding sites I like to
        play strategic and fantasy board games.
      </p>
    </Container>
  )
}

export default About
