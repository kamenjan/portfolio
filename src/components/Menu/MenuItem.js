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
    background-color: var(--color-bg-primary, #2b2b2b);
    cursor: pointer;
  }
  svg {
    margin-right: 8px;
  }
`

const MenuItem = props => {
  const Icon = props.icon ? props.icon : <span />
  const iconHeight = props.height - 20
  return (
    <Container {...props}>
      <Icon height={iconHeight} theme={props.theme} />{' '}
      <span className='underline'>{props.shortcut}:</span> {props.value}
    </Container>
  )
}

MenuItem.defaultProps = {
  height: 42,
  icon: <span />,
  shortcut: '1',
  value: 'Menu Item',
}

export default MenuItem
