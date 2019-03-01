import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { device } from '../defines/device'

import MenuItem from './MenuItem'

import burgerIcon from '../static/burger.png'

const menuItems = [
  {
    icon: <span>ICON</span>,
    value: 'Top',
    shortcut: '1',
    // location: '#',
    // action: history.goBack
  },
  {
    icon: <span>ICON</span>,
    value: 'Stack',
    shortcut: '2',
    // location: '/settings'
  },
  {
    icon: <span>ICON</span>,
    value: 'Work',
    shortcut: '3',
    // location: '#',
    // action: coinsUpdate
  },
]

// Menu container CSS
const StyledMenu = styled.div`
  position: fixed;
  right: 0;
  bottom: ${props => (props.menuOpened ? 'calc(100% - 280px)' : '100%')};
  width: 360px;

  background-color: #3d3d3d;
  color: #a9b7c6;

  border-left: 1px solid #676767;
  border-bottom: 1px solid #676767;

  transition: bottom 0.5s ease-in-out;

  @media ${device.MD} {
    right: inherit;
    left: 0;
    bottom: 0;
    width: 100%;

    border-top: 1px solid #676767;
    border-left: none;
    border-bottom: none;
  }

  #status-bar-burger {
    position: fixed;
    top: 8px;
    right: 8px;
    height: 34px;
    @media (min-width: ${device.MD}) {
      display: none;
    }
  }
  #status-bar-container {
    display: flex;
    flex-flow: column;
    @media (min-width: ${device.MD}) {
      max-width: 769px;
      margin-left: auto;
      margin-right: auto;
      //height: 100%;
      //width: 100%;
      flex-flow: row;
    }
  }
`

const Menu = props => {
  const [menuOpened, setMenuOpened] = useState(false)
  return (
    <StyledMenu menuOpened={menuOpened} mobile={props.viewport.width < 768}>
      <img
        id={'status-bar-burger'}
        onClick={() => setMenuOpened(!menuOpened)}
        src={burgerIcon}
        alt={''}
      />
      <div id='status-bar-container'>
        {menuItems.map((item, i) => (
          <MenuItem key={i} {...item} />
        ))}
      </div>
    </StyledMenu>
  )
}

export default Menu
