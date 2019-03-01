import React from 'react'
import styled from 'styled-components'

import { device } from '../defines/device'

const StyledMenuItem = styled.div`
  font-size: 22px;
  padding: 0 12px;
  height: 48px;
  display: flex;
  align-items: center;
  border-top: 1px solid #676767;

  @media (min-width: ${device.MD}) {
    border-top: none;
  }

  &:hover {
    background-color: #2b2b2b;
    cursor: pointer;
  }
  .icon {
    height: 18px;
    margin-right: 16px;
  }
`

const MenuItem = ({ icon, value, shortcut }) => {
  return (
    <StyledMenuItem>
      {icon} <span className='underline'>{shortcut}:</span> {value}
    </StyledMenuItem>
  )
}

export default MenuItem
