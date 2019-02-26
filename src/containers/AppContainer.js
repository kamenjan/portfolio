import React from 'react'

// import * as basicScroll from 'basicscroll'
import { createGlobalStyle } from 'styled-components/macro'

import Home from '../components/Home'
// import HookExample from '../components/example/HookExample'

import whiteboardImage from '../static/white_board.jpg'
import headerBgImage from '../static/meetup.jpg'

const GlobalStyle = createGlobalStyle`
  body {
    color: #DDD;
    background-color: #444;
  }
  .section {
    text-align: center;
    .container {
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .first-parallax {
    background-image: url(${whiteboardImage});
    height: 400px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: grayscale(100%) brightness(20%);
  }
  .background {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1;
    background-image: url(${headerBgImage});
    height: 400px; /* You must set a specified height */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    filter: grayscale(100%) brightness(20%);
  }
  .header-wrapper {
   height: 400px;
  }
`

const AppContainer = () => {
  return (
    <>
      <Home />
      <GlobalStyle />
    </>
  )
}

export default React.memo(AppContainer)
