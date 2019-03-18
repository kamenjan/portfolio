import React, { useContext, useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

import ThemeContext from '../../context/theme'

import { media, size } from '../../utils/media'

import MenuItem from './MenuItem'
import { HamburgerCollapse } from 'react-animated-burgers'

const toggleMenu = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(600px);
  }
  100% {
    background: orange;
  }
`

const Container = styled.div`
  --item-height-mobile: 72px;
  --menu-height-mobile: calc(var(--item-height-mobile) * 6);
  --menu-height-desktop: 38px;

  position: fixed;
  right: 0;
  bottom: ${props =>
    props.menuOpened ? `calc(100% - var(--menu-height-mobile))` : '100%'};

  width: 280px;
  height: var(--menu-height-mobile);

  background-color: var(--color-bg-menu);
  color: var(--color-contrast);

  border-left: 1px solid #676767;
  border-bottom: 1px solid #676767;

  transition: bottom 0.8s ease-in-out;
  //animation-name: ${toggleMenu};
  //animation-duration: 0.4s;
  //animation-fill-mode: forwards;
  //animation-timing-function: ease-in;

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
    position: fixed;
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
  // Set  menu state
  const [menuOpened, setMenuOpened] = useState(false)

  // Calculate mobile menu height based on menu item number and height
  const menuItemCount = navMenuData.length

  const { theme, setTheme } = useContext(ThemeContext)

  const uiCloseMenuEvents = ['focusout', 'scroll']

  useEffect(() => {
    uiCloseMenuEvents.map(event =>
      document.addEventListener(event, () => setMenuOpened(false)),
    )
    return () => {
      uiCloseMenuEvents.map(event =>
        document.removeEventListener(event, () => setMenuOpened(false)),
      )
    }
  }, [])

  return (
    <Container menuOpened={menuOpened} itemCount={menuItemCount} color={'red'}>
      <HamburgerCollapse
        className={'status-bar-burger'}
        buttonWidth={40}
        isActive={menuOpened}
        toggleButton={() => setMenuOpened(!menuOpened)}
      />
      <div id={'status-bar-container'}>
        {navMenuData.map(
          ({ value, icon, scrollTo, floatRight, toggleTheme }, i) => {
            return (
              <MenuItem
                key={i}
                value={value}
                icon={icon}
                shortcut={i + 1}
                scrollTo={scrollTo}
                floatRight={floatRight}
                onClick={() => {
                  setMenuOpened(false)
                  toggleTheme && setTheme(theme === 'dark' ? 'light' : 'dark')
                }}
              />
            )
          },
        )}
      </div>
    </Container>
  )
}

export default React.memo(Menu)
