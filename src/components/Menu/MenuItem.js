import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { Link, scroller } from 'react-scroll'

import styled from 'styled-components'
import { media } from '../../utils/media'

const Container = styled.div`
  @media ${media.MD} {
    border-top: none;
  }
  svg {
    margin-right: 8px;
  }
`

const Shortcut = styled.span`
  text-decoration: underline;
  display: none;

  &:after {
    display: inline-block;
    content: ':';
    text-decoration: none;
    white-space: pre;
  }

  @media ${media.MD} {
    display: inline-block;
  }
`

const DisplayValue = styled.span``

const MenuItem = ({ icon, scrollTo, shortcut, value, keyPressed, action }) => {
  const Icon = icon ? icon : null

  useEffect(() => {
    if (Number(keyPressed) === shortcut) {
      scrollTo && scroller.scrollTo(scrollTo, { smooth: true, duration: 1200 })
      action()
    }
  }, [action, keyPressed, scrollTo, shortcut])

  return (
    <Container>
      {scrollTo ? (
        <Link onClick={action} to={scrollTo} smooth={true} duration={1200}>
          <Icon />
          <Shortcut>{shortcut}</Shortcut>
          <DisplayValue>{value}</DisplayValue>
        </Link>
      ) : (
        <Link onClick={action}>
          <Icon />
          <Shortcut>{shortcut}</Shortcut>
          <DisplayValue>{value}</DisplayValue>
        </Link>
      )}
    </Container>
  )
}

MenuItem.propTypes = {
  icon: PropTypes.object,
  shortcut: PropTypes.number,
  value: PropTypes.string.isRequired,
}

export default React.memo(MenuItem)
