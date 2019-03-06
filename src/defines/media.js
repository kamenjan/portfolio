import { css } from 'styled-components'

export const size = {
  XS: '360',
  SM: '470',
  MD: '768',
  LG: '1024',
  XL: '1681',
}

export const media = {
  XS: `(min-width: ${size.XS}px)`,
  SM: `(min-width: ${size.SM}px)`,
  MD: `(min-width: ${size.MD}px)`,
  LG: `(min-width: ${size.LG}px)`,
  XL: `(min-width: ${size.XL}px)`,
}

const sizes = {
  SM: 470,
  MD: 768,
  LG: 1024,
  XL: 1681,
}

export const mediaGordan = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})
