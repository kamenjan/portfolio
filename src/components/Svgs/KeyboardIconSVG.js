import React from 'react'
import styled from 'styled-components'

const Container = styled.svg`
  height: ${props => props.height || '28px'};
  .color-contrast-stroke {
    stroke: var(--color-contrast, #a9b7c6);
  }
  .color-contrast-fill {
    fill: var(--color-contrast, #a9b7c6);
  }
  .color-background-fill {
    fill: var(--color-bg-menu, #2b2b2b);
  }
  .color-background-fill {
    fill: var(--color-bg-menu, #2b2b2b);
  }
`

const KeyboardIconSVG = props => {
  return (
    <Container
      viewBox='0 0 400 400'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xlinkHref='http://www.w3.org/1999/xlink'
      {...props}
    >
      <g
        id='Page-1'
        stroke='none'
        strokeWidth='1'
        fill='none'
        fillRule='evenodd'
      >
        <g
          id='keyboard'
          transform='translate(0.000000, 17.000000)'
          strokeWidth='16'
          className='color-contrast-stroke'
        >
          <g id='buttons' transform='translate(33.000000, 157.000000)'>
            <rect id='button' x='8' y='137' width='14' height='14' />
            <rect id='button' x='180' y='137' width='14' height='14' />
            <rect id='button' x='230' y='137' width='14' height='14' />
            <rect id='button' x='273' y='137' width='14' height='14' />
            <rect id='button' x='273' y='94' width='14' height='14' />
            <rect id='button' x='316' y='137' width='14' height='14' />
            <rect id='button' x='51' y='94' width='14' height='14' />
            <rect id='button' x='94' y='94' width='14' height='14' />
            <rect id='button' x='137' y='94' width='14' height='14' />
            <rect id='button' x='230' y='8' width='14' height='14' />
            <rect id='button' x='273' y='8' width='14' height='14' />
            <rect id='button' x='316' y='8' width='14' height='14' />
            <rect id='button' x='180' y='94' width='14' height='14' />
            <rect id='button' x='51' y='51' width='14' height='14' />
            <rect id='button' x='273' y='8' width='14' height='14' />
            <rect id='button' x='94' y='51' width='14' height='14' />
            <rect id='button' x='137' y='51' width='14' height='14' />
            <rect id='button' x='180' y='51' width='14' height='14' />
            <rect id='button' x='51' y='8' width='14' height='14' />
            <rect id='button' x='94' y='8' width='14' height='14' />
            <rect id='button' x='137' y='51' width='14' height='14' />
            <rect id='button' x='137' y='8' width='14' height='14' />
            <rect id='button' x='180' y='8' width='14' height='14' />
            <rect id='button' x='51' y='137' width='100' height='14' />
            <rect id='button' x='8' y='94' width='14' height='14' />
            <rect id='button' x='8' y='51' width='14' height='14' />
            <rect id='button' x='8' y='8' width='14' height='14' />
          </g>
          <rect id='frame' x='8' y='136' width='384' height='204' rx='30' />
          <path
            d='M73.4648437,112.136719 C73.0595098,77.2760699 85.0217493,55.4004189 109.351562,46.5097656 C204.153882,11.866896 183.822787,115.369528 271.386719,94.5820312 C316.303109,83.9189728 338.310921,52.6038686 337.410156,0.63671875'
            id='wire'
          />
        </g>
      </g>
    </Container>
  )
}

export default React.memo(KeyboardIconSVG)
