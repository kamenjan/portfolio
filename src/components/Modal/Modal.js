import React from 'react'
import styled from 'styled-components'

import { media, size } from '../../utils/media'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.7);

  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  display: inline-block;
  background-color: var(--color-bg-menu, #2b2b2b);
  color: var(--color-contrast, #2b2b2b);
  padding: 20px;
  box-shadow: 10px 10px 5px 0 rgba(0, 0, 0, 0.75);

  max-width: 355px;
  margin-left: auto;
  margin-right: auto;

  p {
    font-size: 11px;
    line-height: 1.5em;
    &:not(:last-child) {
      margin-bottom: 18px;
    }
  }

  @media ${media.SM} {
    max-width: ${`${size.SM}px`};
    p {
      line-height: 1.7em;
      font-size: 14px;
    }
  }

  @media ${media.MD} {
    max-width: ${`${size.MD}px`};
    p {
      line-height: 1.7em;
      font-size: 16px;
    }
  }
`

const Modal = props => {
  return (
    <Container>
      <Content>
        <p>
          hey there you awesome being, welcome to my reactive portfolio. design
          was inspired by jetbrain's{' '}
          <a href='https://www.jetbrains.com/webstorm/'>webstorm</a> ide and{' '}
          <a href='https://github.com/bulenkov/Darcula'>darcula</a> theme. it's
          powered with <a href='https://reactjs.org/'>react</a> and{' '}
          <a href='https://github.com/facebook/create-react-app'>
            create react app
          </a>
          . code is deployed to and hosted by{' '}
          <a href='https://pages.github.com/'>github pages</a>.
        </p>
        <p>
          most of the assets are my own creation, but the menu burger is from
          jonathan suh's css animated{' '}
          <a href='https://jonsuh.com/hamburgers/'>menu burgers library</a> -
          thank you so much for your work!
        </p>
        <p>
          i tried to make components as reusable as possible. most of the site
          content is consumed dynamically and can be easily swapped or edited.
          here's the repo if you want to play around or just see how it's put
          together.
        </p>
        <p>
          really hope you like the page. either way i would appreciate it if
          you'd reach out and share your thoughts.
        </p>
      </Content>
    </Container>
  )
}

export default React.memo(Modal)
