import React from 'react'
import styled from 'styled-components'

const StyledInfoIcon = styled.svg`
  height: 400px;

  .contrast-stroke {
    stroke-width: 16px;
    stroke: var(--color-contrast, #a9b7c6);
  }

  .contrast-fill {
    fill: var(--color-contrast, #a9b7c6);
  }

  .background-fill {
    fill: var(--color-bg-primary, #2b2b2b);
  }
`

const InfoIconSVG = props => {
  return (
    <StyledInfoIcon
      viewBox='0 0 400 400'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xlinkHref='http://www.w3.org/1999/xlink'
    >
      <g>
        <circle
          className='contrast-stroke background-fill'
          cx='200.5'
          cy='200.5'
          r='172.5'
        />
        <circle className='contrast-fill' cx='200' cy='85' r='30' />
        <path
          className='contrast-fill'
          d='M241,294.5 L229.5,294.5 L229.5,177.5 L241,177.5 C253.978692,177.5 264.5,166.978692 264.5,154 C264.5,141.021308 253.978692,130.5 241,130.5 L160,130.5 C147.021308,130.5 136.5,141.021308 136.5,154 C136.5,166.978692 147.021308,177.5 160,177.5 L170.5,177.5 L170.5,294.5 L160,294.5 C147.021308,294.5 136.5,305.021308 136.5,318 C136.5,330.978692 147.021308,341.5 160,341.5 L241,341.5 C253.978692,341.5 264.5,330.978692 264.5,318 C264.5,305.021308 253.978692,294.5 241,294.5 Z'
        />
      </g>
    </StyledInfoIcon>
  )
}

export default InfoIconSVG
