import React, { useEffect, useState } from 'react'

import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components/macro'

import 'normalize.css'

import Header from './Header'
import Stack from './Stack'
import Work from './Work'
import Community from './Community'
import Menu from './example/Menu'

const GlobalStyle = createGlobalStyle`
  html { 
    box-sizing: border-box;
    body {
      background-color: #2b2b2b;
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
  }
`

const Portfolio = props => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Stack />
      <Work />
      <Community />
      <Menu viewport={props.viewport} />
    </>
  )
}

export default Portfolio
