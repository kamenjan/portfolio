import { css } from 'styled-components'

const size = {
  XS: '360px',
  SM: '470px',
  MD: '768px',
  LG: '1024px',
  XL: '1681px',
}

export const media = {
  XS: `(min-width: ${size.XS})`,
  SM: `(min-width: ${size.SM})`,
  MD: `(min-width: ${size.MD})`,
  LG: `(min-width: ${size.LG})`,
  XL: `(min-width: ${size.XL})`,
}

const sizes = {
  huge: 1440,
  large: 1170,
  medium: 768,
  small: 450,
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
