import React, { useContext, useState, useEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components'

import ThemeContext from '../../context/theme'

import { media, size } from '../../utils/media'

import MenuItem from './MenuItem'
import { HamburgerCollapse } from 'react-animated-burgers'

const toggleMenu = keyframes`
  from {
    transform: translateY(0);
    visibility: hidden;
  }
  
  to {
    transform: translateY(calc(var(--item-height-mobile) * 6));
  }
`

const Container = styled.div`
  --item-height-mobile: 72px;
  --menu-height-mobile: calc(var(--item-height-mobile) * 6);
  --menu-height-desktop: 38px;

  .animation {
    animation-name: ${toggleMenu};
    animation-name: ${({ animationActive }) =>
      animationActive ? toggleMenu : 'none'};
    //animation-direction: normal;
    animation-direction: ${props => (props.menuOpened ? 'normal' : 'reverse')};
    animation-duration: ${({ animationDuration }) =>
      animationDuration ? `${animationDuration}s` : '0.4s'};
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
  }

  a {
    color: var(--color-contrast);
    text-decoration: none;
    &:hover {
      color: var(--color-contrast);
      text-decoration: none;
    }
    &:visited {
      color: var(--color-contrast);
    }
  }

  .status-bar-burger {
    visibility: visible;
    position: fixed;
    z-index: 100;
    top: 8px;
    right: 8px;
    span,
    span:after,
    span:before {
      background-color: var(--color-contrast);
    }
    outline: none;
  }

  #status-bar-container {
    display: flex;
    flex-flow: column;

    position: fixed;
    right: 0;
    bottom: 100%;

    width: 280px;
    height: var(--menu-height-mobile);

    background-color: var(--color-bg-menu);
    color: var(--color-contrast);

    border-left: 1px solid #676767;
    border-bottom: 1px solid #676767;
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

    div:not(:first-child) > a {
      border-top: 1px solid #676767;
    }

    @media ${media.MD} {
      max-width: ${`${size.MD}px`};
      margin-left: auto;
      margin-right: auto;
      flex-flow: row;
      a {
        height: var(--menu-height-desktop);
        border-top: none;
        font-size: 16px;
      }
      div:not(:first-child) > a {
        border-top: none;
      }
    }
    @media ${media.LG} {
      max-width: ${`${size.LG}px`};
    }
  }

  @media ${media.MD} {
    right: inherit;
    left: 0;
    top: calc(100% - var(--menu-height-desktop));
    width: 100%;
    height: var(--menu-height-desktop);
    padding-top: 0;

    border-top: 1px solid #676767;
    border-left: none;
    border-bottom: none;
    .status-bar-burger {
      display: none;
    }
  }
`

const Menu = ({ navMenuData }) => {
  const { theme, setTheme } = useContext(ThemeContext)

  // Calculate mobile menu height based on menu item number and height
  const menuItemCount = navMenuData.length

  // Set menu state and state handlers
  const [menuOpened, setMenuOpened] = useState(false)
  const animationContainerRef = useRef(null)
  const closeMenu = () => menuOpened && setMenuOpened(false)
  const closeMenuEvents = ['focusout', 'scroll']

  // TODO: set animation duration source and set that as a timeout on
  // menuOpened state effect to remove the 'animation' class so that css
  // animation can be restarted
  const toggleMenuAnimationDuration = 0.4
  const [animationActive, setAnimationActive] = useState(false)

  // keyPress event listener for menu items keyboard shortcuts
  const [keyPressed, setKeyPressed] = useState(null)
  const keyPress = e => setKeyPressed(e.key)

  // state for checking if menuOpened state was triggered when setting initial state
  const [menuToggleCount, setMenuToggleCount] = useState(0)

  useEffect(() => {
    menuToggleCount && setAnimationActive(true)
    setMenuToggleCount(menuToggleCount + 1)

    menuOpened && // if menu was opened add listeners for close menu events
      closeMenuEvents.map(e => document.addEventListener(e, closeMenu))
    return () => {
      closeMenuEvents.map(e => document.removeEventListener(e, closeMenu))
    }
  }, [menuOpened])

  useEffect(() => {
    const animationContainer = animationContainerRef.current
    animationContainer.addEventListener('animationend', () => {
      setAnimationActive(false)
      console.log('Animation ended')
    })
    document.addEventListener('keypress', keyPress)
    return () => {
      document.removeEventListener('keypress', keyPress)
    }
  }, [])

  return (
    <Container
      menuOpened={menuOpened}
      itemCount={menuItemCount}
      animationActive={animationActive}
      animationDuration={toggleMenuAnimationDuration}
    >
      <HamburgerCollapse
        className={'status-bar-burger'}
        buttonWidth={40}
        isActive={menuOpened}
        toggleButton={() => setMenuOpened(!menuOpened)}
      />
      <div
        id={'status-bar-container'}
        className={menuOpened ? 'animation' : 'animation'}
        ref={animationContainerRef}
      >
        {navMenuData.map(
          ({ value, icon, scrollTo, floatRight, toggleTheme }, i) => {
            const action = () => {
              closeMenu()
              toggleTheme && setTheme(theme === 'dark' ? 'light' : 'dark')
            }

            return (
              <MenuItem
                key={i}
                value={value}
                icon={icon}
                shortcut={i + 1}
                scrollTo={scrollTo}
                floatRight={floatRight}
                keyPressed={keyPressed}
                action={action}
              />
            )
          },
        )}
      </div>
    </Container>
  )
}

export default React.memo(Menu)
