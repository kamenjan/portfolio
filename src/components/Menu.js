import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

import burgerIcon from '../static/burger.png'

// Header container CSS
const StyledMenu = styled.div`
  position: fixed;
  right: 0;
  bottom: ${props => (props.menuOpened ? 'calc(100% - 650px)' : '100%')};

  width: ${props => (props.mobile ? '360px' : '100%')};

  background-color: #3d3d3d;
  border-left: 1px solid #676767;
  border-bottom: 1px solid #676767;
  color: #a9b7c6;
  #status-bar-burger {
    position: fixed;
    top: 8px;
    right: 8px;
    height: 34px;
  }
  #status-bar-container {
    display: flex;
    flex-flow: column;
    //padding-top: 200px;
    .bar-item {
      font-size: 22px;
      padding: 0 12px;
      height: 48px;
      display: flex;
      align-items: center;
      border-top: 1px solid #676767;
      &:hover {
        background-color: #2b2b2b;
        cursor: pointer;
      }
      .bar-item-icon {
        height: 18px;
        margin-right: 16px;
      }
    }
  }

  transition: bottom 0.5s ease-in-out;
`

// const MenuItems = props => {
//   return (
//     <>
//
//     </>
//   )
// }

const Menu = props => {
  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <StyledMenu menuOpened={menuOpened} mobile={props.viewport.width < 768}>
      <div id='status-bar'>
        <img
          id={'status-bar-burger'}
          onClick={() => setMenuOpened(!menuOpened)}
          src={burgerIcon}
          alt={''}
        />
        <div id='status-bar-container'>
          <div className='bar-item'>
            <span className='underline'>1</span>:Top
          </div>
          <div className='bar-item'>
            <span className='underline'>2</span>:Stack
          </div>
          <div className='bar-item'>
            <span className='underline'>3</span>:Work
          </div>
          <div className='bar-item'>
            <span className='underline'>4</span>:Community
          </div>
          <div className='bar-item bar-item-right'>
            <span className='underline'>5</span>:Theme
          </div>
          <div className='bar-item'>
            <span className='underline'>6</span>:Info
          </div>
        </div>
      </div>
    </StyledMenu>
  )
}

export default Menu
