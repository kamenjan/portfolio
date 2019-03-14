import React, { useContext, useState } from 'react'
import styled from 'styled-components'

import ThemeContext from '../../context/theme'
import { media, size } from '../../defines/media'
import MenuItem from './MenuItem'
import burgerIcon from '../../static/burger.png'
import ToggleIcon from '../svg/ToggleIconSVG'
import InfoIcon from '../svg/InfoIconSVG'

import { Link } from 'react-scroll'

// Menu container CSS
const Container = styled.div`
  position: fixed;
  right: 0;
  bottom: ${props =>
    props.menuOpened ? `calc(100% - ${props.menuHeight}px)` : '100%'};
  width: 360px;
  padding-top: ${props => `${props.itemHeight}px`}

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


  #status-bar-burger {
    position: fixed;
    top: 8px;
    right: 8px;
    height: 34px;
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
    @media ${media.XL} {
      max-width: ${`${size.XL}px`};
    }            
  }
`

const Menu = props => {
  // Set  menu state
  const [menuOpened, setMenuOpened] = useState(false)

  // Calculate mobile menu height based on menu item number and height
  const menuItemCount = 5
  const menuHeight = menuItemCount * props.itemHeight + props.itemHeight

  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <Container
      menuOpened={menuOpened}
      menuHeight={menuHeight}
      itemHeight={props.itemHeight}
    >
      <img
        id={'status-bar-burger'}
        onClick={() => setMenuOpened(!menuOpened)}
        src={burgerIcon}
        alt={''}
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

export default Menu
