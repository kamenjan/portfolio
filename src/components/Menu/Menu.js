import React, { useState, useEffect, useContext } from 'react'

import { TransitionGroup, CSSTransition } from 'react-transition-group'
import styled from 'styled-components'
import { media, size, getViewportWidth } from '../../utils/media'

import MenuItem from './MenuItem'
import { HamburgerCollapse } from 'react-animated-burgers'
import ThemeContext from '../../context/theme'
import ModalContext from '../../context/modal'

const Container = styled.div`
  position: initial;
  background-color: var(--color-bg-menu);
  color: var(--color-contrast);
  a {
    color: var(--color-contrast);
    text-decoration: none;
    &:hover {
      color: var(--color-contrast);
      background-color: var(--color-bg-primary, #2b2b2b);
      cursor: pointer;
      text-decoration: none;
    }
    &:visited {
      color: var(--color-contrast);
    }
  }

  @media ${media.MD} {
    position: fixed;
    left: 0;
    bottom: 0;

    width: 100%;
    height: 40px;
  }
`
const MobileMenu = styled.div`
  --item-height-mobile: 72px;
  --menu-height-mobile: calc(var(--item-height-mobile) * 6);
  --animation-duration: ${props => props.timeout || '1000ms'}

  display: flex;
  flex-flow: column;

  position: fixed;
  right: 0;
  top: 0;

  width: 280px;
  height: var(--menu-height-mobile);

  background-color: var(--color-bg-menu);
  color: var(--color-contrast);

  border-left: 1px solid #676767;
  border-bottom: 1px solid #676767;

  &.menu-enter {
    transform: translateY(calc(var(--item-height-mobile) * -6));
  }

  &.menu-enter-active {
    transform: translateY(0);
    transition: all var(--animation-duration);
  }

  &.menu-enter-done {
    transform: translateY(0);
  }

  &.menu-exit {
    transform: translateY(0);
  }

  &.menu-exit-active {
    transform: translateY(calc(var(--item-height-mobile) * -6));
    transition: all var(--animation-duration);
  }
  
  a {
    height: var(--item-height-mobile);
    width: 100%;
    font-size: 22px;
    padding: 0 12px;
    display: flex;
    align-items: center;

    &:hover {
      background-color: var(--color-bg-primary, #2b2b2b);
      cursor: pointer;
    }
  }
`
const DesktopMenu = styled.div`
  --menu-height-desktop: 38px;

  max-width: ${`${size.MD}px`};
  display: flex;
  flex-flow: row;
  margin-left: auto;
  margin-right: auto;

  div:nth-child(5) {
    margin-left: auto;
  }

  a {
    display: flex;
    height: var(--menu-height-desktop);
    padding: 0 12px;
    border-top: none;
    font-size: 16px;
    align-items: center;
  }

  @media ${media.LG} {
    max-width: ${`${size.LG}px`};
  }
`
const MenuBurger = styled(HamburgerCollapse)`
  position: fixed;
  z-index: 100;
  top: 8px;
  right: 8px;
  outline: none;
`

const Menu = ({ menuItems }) => {
  // Set menu state and state handlers
  const [menuOpened, setMenuOpened] = useState(false)
  const closeMenu = () => menuOpened && setMenuOpened(false)
  const closeMenuEvents = ['focusout', 'scroll']

  const [mobile, setMobile] = useState(false)
  const onResize = event => {
    const width = event.target.innerWidth
    width > size.MD && setMenuOpened(false)
    setMobile(width < size.MD)
  }

  const [keyPressed, setKeyPressed] = useState(null)
  const keyPress = e => {
    setKeyPressed(e.key)
    setKeyPressed(null)
  }

  const animationTimeout = 400

  const { theme, setTheme } = useContext(ThemeContext)
  const { modalOpened, setOpened } = useContext(ModalContext)

  const menuItemsContainer = menuItems.map(
    ({ value, icon, scrollTo, actionDescription }, i) => {
      const actionCreator = actionDescription => () => {
        switch (actionDescription) {
          case 'toggleTheme':
            setTheme(theme === 'dark' ? 'light' : 'dark')
            break
          case 'openModal':
            setOpened(!modalOpened)
            break
          default:
            return null
        }
      }

      return (
        <MenuItem
          key={i}
          value={value}
          icon={icon}
          shortcut={i + 1}
          scrollTo={scrollTo}
          action={actionCreator(actionDescription)}
          keyPressed={keyPressed}
        />
      )
    },
  )

  useEffect(() => {
    setMobile(getViewportWidth() < size.MD)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    !mobile && document.addEventListener('keypress', keyPress)
    setKeyPressed(null)
    return () => document.removeEventListener('keypress', keyPress)
  }, [mobile])

  useEffect(() => {
    menuOpened && // if menu was opened add listeners for close menu events
      closeMenuEvents.map(e => document.addEventListener(e, closeMenu))
    return () =>
      closeMenuEvents.map(e => document.removeEventListener(e, closeMenu))
  }, [menuOpened])

  return (
    <Container>
      {mobile ? (
        <>
          <MenuBurger
            isActive={menuOpened}
            toggleButton={() => setMenuOpened(!menuOpened)}
          />
          <TransitionGroup component={null}>
            {menuOpened && (
              <CSSTransition classNames='menu' timeout={animationTimeout}>
                <MobileMenu timeout={`${animationTimeout}ms`}>
                  {menuItemsContainer}
                </MobileMenu>
              </CSSTransition>
            )}
          </TransitionGroup>
        </>
      ) : (
        <DesktopMenu>{menuItemsContainer}</DesktopMenu>
      )}
    </Container>
  )
}

export default React.memo(Menu)
