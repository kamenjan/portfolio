import React from 'react'
import styled from 'styled-components'

import { media } from '../../defines/media'

const Container = styled.div`
  font-size: 16px;
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

const Shortcut = styled.span`
  text-decoration: underline;

  &:after {
    content: ':';
    text-decoration: none;
    display: inline-block;
    white-space: pre;
  }
`

const DisplayValue = styled.span``

const MenuItem = props => {
  const Icon = props.icon ? props.icon : null
  const iconHeight = props.height - 20
  return (
    <Container {...props}>
      <Icon height={iconHeight} theme={props.theme} />
      <Shortcut>{props.shortcut}</Shortcut>
      <DisplayValue>{props.value}</DisplayValue>
    </Container>
  )
}

MenuItem.defaultProps = {
  height: 42,
  icon: <span />,
  value: 'Menu Item',
}

export default MenuItem
