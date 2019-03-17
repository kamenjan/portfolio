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

const HomeIconSVG = props => {
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
        <g id='house' className='color-contrast-stroke'>
          <path
            d='M296,341 L342,341 L342,174.840187 L389.048991,174.840187 C390.082585,174.840187 390.97686,174.512058 391.550204,174.014682 C391.892037,173.718141 392,173.49671 392,173.340187 C392,173.154995 391.847687,172.87538 391.390343,172.537935 L390.944802,172.209197 L390.548797,171.822215 C390.105953,171.389461 389.555533,170.886541 388.882062,170.302305 L205.188234,10.9479094 C202.730544,8.81586297 202.022607,8.40052811 201.028185,8.13905854 C200.323028,7.95364715 199.639628,7.95364715 198.934471,8.13905854 C197.940049,8.40052811 197.232113,8.81586297 194.774422,10.9479094 L119,76.6822206 L119,30 L72,30 L72,117.454721 L11.0805939,170.302305 C10.3604235,170.927053 9.78137017,171.458454 9.32446407,171.910065 L8.96747259,172.26292 L8.56917608,172.568385 C8.14077853,172.896935 8,173.162059 8,173.340187 C8,173.49671 8.10796278,173.718141 8.44979569,174.014682 C9.02314017,174.512058 9.91741539,174.840187 10.9510086,174.840187 L58,174.840187 L58,341 L220,341 L220,221 L296,221 L296,341 Z M102,221 L168,221 L168,287 L102,287 L102,221 Z'
            id='Combined-Shape'
            strokeWidth='16'
          />
          <path
            d='M228.5,368.5 L298.507142,368.5'
            id='Line'
            strokeWidth='12'
            strokeLinecap='square'
          />
          <path
            d='M237.5,393.5 L288.002475,393.5'
            id='Line'
            strokeWidth='12'
            strokeLinecap='square'
          />
        </g>
      </g>
    </Container>
  )
}

export default React.memo(HomeIconSVG)
