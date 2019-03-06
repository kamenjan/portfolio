import React, { useContext, useState } from 'react'
import styled from 'styled-components'

import ThemeContext from '../../context/theme'

import { media } from '../../defines/media'

import MenuItem from './MenuItem'

import burgerIcon from '../../static/burger.png'

// Menu container CSS
const Container = styled.div`
  position: fixed;
  right: 0;
  bottom: ${props =>
    props.menuOpened ? `calc(100% - ${props.menuHeight}px)` : '100%'};
  width: 360px;
  padding-top: ${props => `${props.itemHeight}px`}

  background-color: #3d3d3d;
  color: #a9b7c6;

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
      max-width: 769px;
      margin-left: auto;
      margin-right: auto;
      flex-flow: row;
    }
  }
`

const Menu = props => {
  // Set  menu state
  const [menuOpened, setMenuOpened] = useState(false)

  // Calculate mobile menu height based on menu item number and height
  const menuHeight = props.items.length * props.itemHeight + props.itemHeight

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
          <MenuItem key={i} {...item} height={props.itemHeight} />
        ))}
        <MenuItem
          height={props.itemHeight}
          icon={'ikonca'}
          value={'toggle'}
          shortcut={'5'}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
      </div>
    </Container>
  )
}

Menu.defaultProps = {
  itemHeight: 42,
  items: [
    {
      icon: <span>ICON</span>,
      value: 'Top',
      shortcut: '1',
    },
    {
      icon: <span>ICON</span>,
      value: 'Stack',
      shortcut: '2',
    },
    {
      icon: <span>ICON</span>,
      value: 'Work',
      shortcut: '3',
    },
    {
      icon: <span>ICON</span>,
      value: 'JAdidadi',
      shortcut: '4',
    },
  ],
}

export default Menu
