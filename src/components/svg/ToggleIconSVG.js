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

const ToggleIconSVG = props => {
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
        <rect
          id='button-frame'
          className='color-contrast-stroke color-background-fill'
          strokeWidth='16'
          x='8'
          y='105'
          width='384'
          height='190'
          rx='95'
        />
        <circle
          id='Oval'
          className={
            props.theme === 'dark'
              ? 'color-background-fill'
              : 'color-contrast-fill'
          }
          cx='113.5'
          cy='200.5'
          r='58.5'
        />
        <circle
          id='Oval-Copy'
          className={
            props.theme === 'light'
              ? 'color-background-fill'
              : 'color-contrast-fill'
          }
          cx='286.5'
          cy='200.5'
          r='58.5'
        />
      </g>
    </Container>
  )
}

export default ToggleIconSVG
