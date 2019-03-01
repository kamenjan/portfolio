import React from 'react'
import styled from 'styled-components'

const StyledScreensIcon = styled.svg`
  height: 400px;
  .color-contrast-stroke {
    stroke: #a9b7c6;
  }
  .color-contrast-fill {
    fill: #a9b7c6;
  }
  .color-background-fill {
    fill: #2b2b2b;
  }
  .color-background-fill {
    fill: #2b2b2b;
  }
`

const ScreensIconSVG = props => {
  return (
    <StyledScreensIcon
      viewBox='0 0 400 400'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xlinkHref='http://www.w3.org/1999/xlink'
      id='screens'
    >
      <defs>
        <rect id='path-1' x='16' y='14' width='320' height='220' rx='20' />
        <path
          d='M22,23 L138,23 C142.418278,23 146,26.581722 146,31 L146,252 C146,256.418278 142.418278,260 138,260 L22,260 C17.581722,260 14,256.418278 14,252 L14,31 C14,26.581722 17.581722,23 22,23 Z'
          id='path-3'
        />
      </defs>
      <g id='desktop' transform='translate(50.000000, 0.000000)'>
        <path
          d='M167,279.925234 L167,248 L20,248 C8.954305,248 0,239.045695 0,228 L0,20 C0,8.954305 8.954305,2.02906125e-15 20,0 L330,0 C341.045695,-3.1460705e-14 350,8.954305 350,20 L350,228 C350,239.045695 341.045695,248 330,248 L184,248 L184,279.925234 L229,306 L122,306 L167,279.925234 Z'
          id='frame-desktop'
          className='color-contrast-fill'
        />
        <mask id='screen-desktop-mask' fill='white'>
          <use xlinkHref='#path-1' />
        </mask>
        <use
          id='screen-desktop'
          className='color-background-fill'
          xlinkHref='#path-1'
        />
        <g id='screen-desktop-lines-container' mask='url(#screen-desktop-mask)'>
          <g
            id='screen-desktop-lines'
            strokeLinecap='square'
            className='color-contrast-stroke'
            strokeWidth='10'
          >
            <path d='M50,1176 L300,1176' />
            <path d='M99,1126 L224,1126' />
            <path d='M50,1101 L163,1101' />
            <path d='M50,1076 L300,1076' />
            <path d='M50,1026 L300,1026' />
            <path d='M50,1151 L300,1151' />
            <path d='M50,1001 L224,1001' />
            <path d='M99,926 L224,926' />
            <path d='M99,901 L224,901' />
            <path d='M99,976 L224,976' />
            <path d='M99,951 L224,951' />
            <path d='M50,876 L300,876' />
            <path d='M50,826 L300,826' />
            <path d='M50,801 L300,801' />
            <path d='M50,776 L300,776' />
            <path d='M50,751 L224,751' />
            <path d='M99,726 L224,726' />
            <path d='M50,674 L224,674' />
            <path d='M50,649 L163,649' />
            <path d='M50,624 L163,624' />
            <path d='M50,599 L163,599' />
            <path d='M50,549 L224,549' />
            <path d='M50,524 L224,524' />
            <path d='M99,474 L224,474' />
            <path d='M50,574 L300,574' />
            <path d='M50,399 L224,399' />
            <path d='M50,372 L224,372' />
            <path d='M50,347 L163,347' />
            <path d='M50,424 L300,424' />
            <path d='M50,297 L300,297' />
            <path d='M50,272 L300,272' />
            <path d='M50,247 L300,247' />
            <path d='M50,222 L224,222' />
            <path d='M50,159 L300,159' />
            <path d='M50,134 L300,134' />
            <path d='M50,109 L300,109' />
            <path d='M99,59 L224,59' />
            <path d='M99,34 L224,34' />
          </g>
        </g>
      </g>
      <g id='mobile' transform='translate(0.000000, 79.000000)'>
        <path
          d='M16,0 L144,0 C152.836556,0 160,7.163444 160,16 L160,305 C160,313.836556 152.836556,321 144,321 L16,321 C7.163444,321 1.082166e-15,313.836556 0,305 L0,16 C-1.082166e-15,7.163444 7.163444,0 16,0 Z M80,305 C88.836556,305 96,297.836556 96,289 C96,280.163444 88.836556,273 80,273 C71.163444,273 64,280.163444 64,289 C64,297.836556 71.163444,305 80,305 Z'
          id='frame-mobile'
          className='color-contrast-fill'
        />
        <mask id='mask-4' fill='white'>
          <use xlinkHref='#path-3' />
        </mask>
        <use
          id='screen-mobile'
          className='color-background-fill'
          xlinkHref='#path-3'
        />
        <g id='screen-mobile-lines-container' mask='url(#mask-4)'>
          <g
            id='screen-mobile-lines'
            strokeLinecap='square'
            className='color-contrast-stroke'
            strokeWidth='10'
          >
            <path d='M30,1176 L130,1176' />
            <path d='M50,1126 L100,1126' />
            <path d='M30,1101 L75,1101' />
            <path d='M30,1076 L130,1076' />
            <path d='M30,1026 L130,1026' />
            <path d='M30,1151 L130,1151' />
            <path d='M30,1001 L100,1001' />
            <path d='M50,926 L100,926' />
            <path d='M50,901 L100,901' />
            <path d='M50,976 L100,976' />
            <path d='M50,951 L100,951' />
            <path d='M30,876 L130,876' />
            <path d='M30,826 L130,826' />
            <path d='M30,801 L130,801' />
            <path d='M30,776 L130,776' />
            <path d='M30,751 L100,751' />
            <path d='M50,726 L100,726' />
            <path d='M30,674 L100,674' />
            <path d='M30,649 L75,649' />
            <path d='M30,624 L75,624' />
            <path d='M30,599 L75,599' />
            <path d='M30,549 L100,549' />
            <path d='M30,524 L100,524' />
            <path d='M50,474 L100,474' />
            <path d='M30,574 L130,574' />
            <path d='M30,399 L100,399' />
            <path d='M30,372 L100,372' />
            <path d='M30,347 L75,347' />
            <path d='M30,424 L130,424' />
            <path d='M30,297 L130,297' />
            <path d='M30,272 L130,272' />
            <path d='M30,247 L130,247' />
            <path d='M30,222 L100,222' />
            <path d='M30,159 L130,159' />
            <path d='M30,134 L130,134' />
            <path d='M30,109 L130,109' />
            <path d='M50,59 L100,59' />
            <path d='M50,34 L100,34' />
          </g>
        </g>
      </g>
    </StyledScreensIcon>
  )
}

export default ScreensIconSVG
