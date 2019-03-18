import React, { useContext, useState } from 'react'
import styled from 'styled-components'

import ThemeContext from '../../context/theme'
import { media, size } from '../../utils/media'
import MenuItem from './MenuItem'

import { HamburgerCollapse } from 'react-animated-burgers'

import ToggleIcon from '../Svgs/ToggleIconSVG'
import InfoIcon from '../Svgs/InfoIconSVG'

import { Link } from 'react-scroll'

// Menu container CSS
const Container = styled.div`

  --item-height-mobile: 42px;
  --menu-height-mobile: calc(var(--item-height-mobile) * 6);

  position: fixed;
  right: 0;
  bottom: ${props =>
    props.menuOpened ? `calc(100% - ${props.menuHeight}px)` : '100%'};
  
  width: 280px;
  //padding-top: ${props => `${props.itemHeight}px`}

  background-color: var(--color-bg-menu);
  color: var(--color-contrast);

  border-left: 1px solid #676767;
  border-bottom: 1px solid #676767;

  transition: bottom 0.5s ease-in-out;

  @media ${media.MD} {
    right: inherit;
    left: 0;
    top: ${props => `calc(100% - ${props.itemHeight}px)`};
    width: 100%;
    height: ${props => `${props.itemHeight}px`};
    padding-top: 0;

    border-top: 1px solid #676767;
    border-left: none;
    border-bottom: none;
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
    position: fixed;
    top: 8px;
    right: 8px;
    span, span:after, span:before {
      background-color: var(--color-contrast);
    }
    @media ${media.MD} {
      display: none;
    }
  }
  #status-bar-container {
    display: flex;
    flex-flow: column;
    @media ${media.MD} {
      max-width: ${`${size.MD}px`};
      margin-left: auto;
      margin-right: auto;
      flex-flow: row;
    }
    @media ${media.LG} {
      max-width: ${`${size.LG}px`};
    }          
  }
`

const Menu = props => {
  // Set  menu state
  const [menuOpened, setMenuOpened] = useState(false)

  // Calculate mobile menu height based on menu item number and height
  const menuItemCount = 6
  const menuHeight = menuItemCount * props.itemHeight

  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <Container
      menuOpened={menuOpened}
      menuHeight={menuHeight}
      itemHeight={props.itemHeight}
      itemCount={menuItemCount}
    >
      <HamburgerCollapse
        className={'status-bar-burger'}
        // buttonWidth={50}
        isActive={menuOpened}
        toggleButton={() => setMenuOpened(!menuOpened)}
      />
      <div id='status-bar-container'>
        {props.items.map((item, i) => (
          <Link key={i} to={item.scrollTo} smooth={true} duration={500}>
            <MenuItem
              {...item}
              shortcut={i + 1}
              theme={theme}
              height={props.itemHeight}
              onClick={() => setMenuOpened(!menuOpened)}
            />
          </Link>
        ))}
        <MenuItem
          height={props.itemHeight}
          value={'Theme'}
          icon={ToggleIcon}
          shortcut={props.items.length + 1}
          theme={theme}
          floatRight
          onClick={() => {
            setTheme(theme === 'dark' ? 'light' : 'dark')
          }}
        />
        <MenuItem
          height={props.itemHeight}
          value={'Info'}
          icon={InfoIcon}
          shortcut={props.items.length + 2}
          theme={theme}
        />
      </div>
    </Container>
  )
}

export default React.memo(Menu)
