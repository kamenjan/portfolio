import React, { useContext } from 'react'
import styled from 'styled-components'

import { media } from '../../defines/media'

const Container = styled.div`
  font-size: 22px;
  padding: 0 12px;
  height: ${props => `${props.height}px`};
  display: flex;
  align-items: center;
  border-top: 1px solid #676767;

  @media ${media.MD} {
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

const MenuItem = props => {
  console.log(props)

  return (
    <Container {...props}>
      {props.icon} <span className='underline'>{props.shortcut}:</span>{' '}
      {props.value}
    </Container>
  )
}

MenuItem.defaultProps = {
  height: 42,
  icon: <span>icon</span>,
  shortcut: '1',
  value: 'Menu Item',
}

export default MenuItem
