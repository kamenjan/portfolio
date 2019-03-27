import React, { useState, useEffect, useContext, useRef } from 'react'

import styled from 'styled-components'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { media, size } from '../../utils/media'

import ModalContext from '../../context/modal'

const Container = styled.div`
  --animation-duration: ${props => props.timeout || '1000ms'}
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.7);

  display: flex;
  justify-content: center;
  align-items: center;
  
  &.modal-enter {
    & > div {
      opacity: 0.01;
      transform: scale(1.1);
    }    
  }

  &.modal-enter-active {
    & > div {
      opacity: 1;
      transform: scale(1);
      transition: all var(--animation-duration);
    }    
  }

  &.modal-enter-done {
    & > div {
      transform: scale(1);
      opacity: 1;
    }
  }

  &.modal-exit {
    & > div {
      opacity: 1;
      transform: scale(1);
    }
  }

  &.modal-exit-active {
    & > div {
      opacity: 0.01;
      transform: scale(1.1);
      transition: all var(--animation-duration);
    }
  }
  
`

const Content = styled.div`
  display: inline-block;
  background-color: var(--color-bg-menu, #2b2b2b);
  color: var(--color-contrast, #2b2b2b);
  padding: 20px;
  box-shadow: 10px 10px 5px 0 rgba(0, 0, 0, 0.75);
  width: calc(100% - 20px);
  margin-left: auto;
  margin-right: auto;
  border: 1px solid var(--color-border);

  p {
    font-size: 11px;
    line-height: 1.5em;
    &:not(:last-child) {
      margin-bottom: 18px;
    }
  }

  @media ${media.MD} {
    max-width: ${`${size.MD}px`};
    p {
      line-height: 1.7em;
      font-size: 14px;
    }
  }

  @media ${media.LG} {
    p {
      font-size: 16px;
    }
  }
`

const Modal = ({ opened }) => {
  const { setOpened } = useContext(ModalContext)
  const closeModal = () => setOpened(false)
  const modalBgRef = useRef()
  const animationTimeout = 400

  useEffect(() => {
    const modalBackground = modalBgRef.current
    modalBackground && modalBackground.addEventListener('click', closeModal)
    return () =>
      modalBackground &&
      modalBackground.removeEventListener('click', closeModal)
  }, [opened])

  return (
    <TransitionGroup component={null}>
      {opened && (
        <CSSTransition classNames='modal' timeout={animationTimeout}>
          <Container ref={modalBgRef} timeout={`${animationTimeout}ms`}>
            <Content>
              <p>
                hey there, welcome to my reactive portfolio. sites design was
                inspired by jetbrain's{' '}
                <a href='https://www.jetbrains.com/webstorm/'>webstorm</a> ide
                and <a href='https://github.com/bulenkov/Darcula'>darcula</a>{' '}
                theme. it's powered with{' '}
                <a href='https://reactjs.org/'>react</a> and{' '}
                <a href='https://github.com/facebook/create-react-app'>
                  create react app
                </a>
                . code is deployed to and hosted by{' '}
                <a href='https://pages.github.com/'>github pages</a>. most of
                the assets are my mine, but the menu burger is from jonathan
                suh's css animated{' '}
                <a href='https://jonsuh.com/hamburgers/'>
                  menu burgers library
                </a>{' '}
                - thank you so much for your work!
              </p>

              <p>
                i tried to make components as reusable as possible. site content
                is consumed dynamically and can be easily swapped or edited.
                here's the{' '}
                <a href='https://github.com/kamenjan/portfolio'>repo</a> if you
                want to play around or just see how it's put together.
              </p>
              <p>
                sorry, no cookie for you, but i really hope you like the page.
                either way i would appreciate it if you'd reach out and share
                your thoughts.
              </p>
            </Content>
          </Container>
        </CSSTransition>
      )}
    </TransitionGroup>
  )
}

export default React.memo(Modal)
