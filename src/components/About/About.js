import React from 'react'
import styled from 'styled-components'

import { media } from '../../defines/media'

// Header container CSS
const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;

  p:first-child:before {
    content: '/** ';
  }

  p {
    margin-top: 24px;
    margin-bottom: 24px;
    padding: 0 8px;

    color: var(--color-contrast, #2b2b2b);
    font-size: 14px;
    line-height: 1.6em;
    @media ${media.SM} {
      font-size: 16px;
    }
    @media ${media.MD} {
      font-size: 18px;
    }
    @media ${media.LG} {
      font-size: 20px;
    }
    @media ${media.XL} {
      font-size: 22px;
    }
  }

  p:last-child:after {
    content: ' */';
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
