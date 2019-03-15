import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
import styled from 'styled-components'

import { media } from '../../defines/media'

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;

  p {
    margin-top: 12px;
    margin-bottom: 12px;
    padding: 0 18px;

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
  p:first-child {
    margin-top: 40px;
    &:before {
      content: '/** ';
    }
  }
  p:last-child {
    margin-bottom: 40px;
    &:after {
      content: ' */';
    }
  }
`

const aboutParagraphs = [
  <>
    I'm an allround web developer based{' '}
    <a href={'https://en.wikipedia.org/wiki/Ljubljana'}>@Ljubljana</a>. I enjoy
    building web applications and solving programming challenges while having
    lots of fun in a chaotic world of JavaScript.
  </>,
  ` I have a strong passion for learning new things and working in teams with experienced developers.`,
  `When I'm not building web or solving puzzles on coding sites I like to play strategic and fantasy board games.`,
]

const About = () => {
  const aboutContainerRef = useRef(null)

  useLayoutEffect(() => {
    const aboutContainer = aboutContainerRef.current
    const viewportHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0,
    )
    const aboutHeight = aboutContainer.clientHeight
    const offsetTop = aboutContainer.offsetTop
    const offsetBottom = viewportHeight - (offsetTop + aboutHeight)
    const validMargin = ((offsetTop + aboutHeight) / 100) * 20

    if (offsetBottom > 0 && offsetBottom < validMargin) {
      const newPadding = (offsetBottom - 40) / 2
      aboutContainer.style.padding = `${newPadding}px 0`
    }
  }, [])

  return (
    <Container ref={aboutContainerRef}>
      {aboutParagraphs.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </Container>
  )
}

export default React.memo(About)
