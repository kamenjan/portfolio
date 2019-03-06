import React from 'react'

import { createGlobalStyle } from 'styled-components/macro'

import 'normalize.css'

import Header from './Header/Header'
import About from './About/About'
import Stack from './Stack/Stack'
import Work from './Work/Work'
import Community from './Community/Community'
import Menu from './Menu/Menu'
import ParallaxDivider from './ParallaxDivider/ParallaxDivider'

// import InfoIconSVG from './svg/InfoIconSVG'
// import ScreensIconSVG from './svg/ScreensIconSVG'

const GlobalStyle = createGlobalStyle`
  html { 
    // CSS variables 
    :root { 
      --color-bg-primary: ${props =>
        props.theme === 'light' ? '#d3d3d3' : '#2b2b2b'};
      --color-bg-menu: ${props =>
        props.theme === 'light' ? '#c8c8c8' : '#3d3d3d'};      
      --color-contrast: ${props =>
        props.theme === 'light' ? '#303030' : '#a9b7c6'};      
      --color-primary: ${props =>
        props.theme === 'light' ? '#808080' : '#808080'};
      --color-secondary: ${props =>
        props.theme === 'light' ? '#008000' : '#629755'};
      --color-tertiary: ${props =>
        props.theme === 'light' ? '#cc7832' : '#cc7832'};                   
    }
    box-sizing: border-box;
    body {
      background-color: var(--color-bg-primary, #2b2b2b);
      font-family: 'Lucida Console', Monaco, monospace;
      a {
        color: #287bde;
        text-decoration: none;
        &:hover {
          color: #ab51ba;
          text-decoration: underline;
        }
        &:visited {
          //color: #ab51ba;
        }
      }
    } 
  }
  *, *:before, *:after { 
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
`

const Portfolio = props => {
  return (
    <>
      <GlobalStyle theme={props.theme} />
      <Header theme={props.theme} />
      <About />
      <Stack />
      <ParallaxDivider />
      <Work />
      {/*<Community />*/}
      <Menu viewport={props.viewport} />
    </>
  )
}

export default Portfolio
