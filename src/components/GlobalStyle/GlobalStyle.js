import React from 'react'
import { createGlobalStyle } from 'styled-components/macro'
import 'normalize.css'

const GlobalStyle = createGlobalStyle`
  html { 
    // CSS variables 
    :root { 
      --color-bg-primary: ${({ theme }) =>
        theme === 'light' ? '#2b1a2f' : '#2b2b2b'};
      --color-bg-menu: ${props =>
        props.theme === 'light' ? '#3f2543' : '#3d3d3d'};
      --color-border: ${props =>
        props.theme === 'light' ? '#676767' : '#676767'};             
      --color-contrast: ${props =>
        props.theme === 'light' ? '#cdcdcd' : '#a9b7c6'};      
      --color-primary: ${props =>
        props.theme === 'light' ? '#a0a0a0' : '#808080'};
      --color-secondary: ${props =>
        props.theme === 'light' ? '#629755' : '#629755'};
      --color-tertiary: ${props =>
        props.theme === 'light' ? '#cc7832' : '#cc7832'};      
      --color-link: ${props =>
        props.theme === 'light' ? '#287bde' : '#287bde'};                
    }
    height: 100%;
    box-sizing: border-box;
    body {
    
      // If modal window is opened hijack site scroll
      height: ${props => (props.modalOpened ? '100%' : 'inital')};
      overflow: ${props => (props.modalOpened ? 'hidden' : 'visible')};
    
      background-color: var(--color-bg-primary, #2b2b2b);
      font-family: 'Lucida Console', Monaco, monospace;
      a {
        color: var(--color-link, #287bde);
        text-decoration: none;
        &:hover {
          color: var(--color-link, #0f00ba);
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
  ul {
    list-style-type: none;
  }
`

export default React.memo(GlobalStyle)
