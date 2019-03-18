import React from 'react'
import { createGlobalStyle } from 'styled-components/macro'
import 'normalize.css'

const GlobalStyle = createGlobalStyle`
  html { 
    // CSS variables 
    :root { 
      --color-bg-primary: ${({ theme }) =>
        theme === 'light' ? '#f3f3f3' : '#2b2b2b'};
      --color-bg-menu: ${props =>
        props.theme === 'light' ? '#fbfbfb' : '#3d3d3d'};      
      --color-contrast: ${props =>
        props.theme === 'light' ? '#303030' : '#a9b7c6'};      
      --color-primary: ${props =>
        props.theme === 'light' ? '#808080' : '#808080'};
      --color-secondary: ${props =>
        props.theme === 'light' ? '#008000' : '#629755'};
      --color-tertiary: ${props =>
        props.theme === 'light' ? '#cc7832' : '#cc7832'};      
      --color-link: ${props =>
        props.theme === 'light' ? '#287bde' : '#287bde'};                
    }
    height: 100%;
    box-sizing: border-box;
    body {
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
