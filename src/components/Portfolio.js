import React, { useState, useContext } from 'react'

import ThemeContext from '../context/theme'

import { createGlobalStyle } from 'styled-components/macro'
import 'normalize.css'
import { media, size } from '../defines/media'

import Header from './Header/Header'
import About from './About/About'
import Stack from './Stack/Stack'

import JSDoc from './JSDoc'
import Menu from './Menu/Menu'

import ParallaxDivider from './ParallaxDivider/ParallaxDivider'
import Desk from './ParallaxDivider/Desk/Desk'
import City from './ParallaxDivider/City/City'

import styled from 'styled-components'

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
  ul {
    list-style-type: none;
  }
`

const DocsContainer = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 360px;
  @media ${media.SM} {
    max-width: ${`${size.SM}px`};
  }
  @media ${media.MD} {
    max-width: ${`${size.MD}px`};
  }
  @media ${media.LG} {
    max-width: ${`${size.LG}px`};
  }
  @media ${media.XL} {
    max-width: ${`${size.XL}px`};
  }
`

const Heading = styled.h1`
  width: 100%;
  text-align: center;
  color: var(--color-tertiary, #2b2b2b);
  &:before {
    color: var(--color-primary, #2b2b2b);
    content: './';
  }
  &:after {
    color: var(--color-primary, #2b2b2b);
    content: '$';
  }
`

const jobs = [
  {
    docSections: [
      {
        docTag: 'name',
        type: 'paragraph',
        content: (
          <span>
            <a href=''>termitnjak</a> 2020-2030
          </span>
        ),
      },
      {
        docTag: 'summary',
        type: 'paragraph',
        content:
          'Small company offering B2B and B2C web development, consulting and hosting services to EU and worldwide markets.',
      },
      {
        docTag: 'role',
        type: 'paragraph',
        content:
          'I was brought on board as a frontend developer, but later I also assisted on system and cloud administration.',
      },
      {
        docTag: 'responsibilities',
        type: 'list',
        content: ['doing this', 'doing that'],
      },
      {
        docTag: 'tags',
        type: 'array',
        content: ['javascript', 'html'],
      },
    ],
  },
  {
    docSections: [
      {
        docTag: 'name',
        type: 'paragraph',
        content: (
          <span>
            <a href=''>termitnjak</a> 2020-2030
          </span>
        ),
      },
      {
        docTag: 'summary',
        type: 'paragraph',
        content:
          'Small company offering B2B and B2C web development, consulting and hosting services to EU and worldwide markets.',
      },
      {
        docTag: 'role',
        type: 'paragraph',
        content:
          'I was brought on board as a frontend developer, but later I also assisted on system and cloud administration.',
      },
      {
        docTag: 'responsibilities',
        type: 'list',
        content: ['doing this', 'doing that'],
      },
      {
        docTag: 'tags',
        type: 'array',
        content: ['javascript', 'html'],
      },
    ],
  },
]
const communityProjects = [
  {
    docSections: [
      {
        docTag: 'name',
        type: 'paragraph',
        content: (
          <span>
            <a href=''>termitnjak</a> 2020-2030
          </span>
        ),
      },
      {
        docTag: 'summary',
        type: 'paragraph',
        content:
          'Small company offering B2B and B2C web development, consulting and hosting services to EU and worldwide markets.',
      },
      {
        docTag: 'role',
        type: 'paragraph',
        content:
          'I was brought on board as a frontend developer, but later I also assisted on system and cloud administration.',
      },
      {
        docTag: 'responsibilities',
        type: 'list',
        content: ['doing this', 'doing that'],
      },
      {
        docTag: 'tags',
        type: 'array',
        content: ['javascript', 'html'],
      },
    ],
  },
  {
    docSections: [
      {
        docTag: 'name',
        type: 'paragraph',
        content: (
          <span>
            <a href=''>termitnjak</a> 2020-2030
          </span>
        ),
      },
      {
        docTag: 'summary',
        type: 'paragraph',
        content:
          'Small company offering B2B and B2C web development, consulting and hosting services to EU and worldwide markets.',
      },
      {
        docTag: 'role',
        type: 'paragraph',
        content:
          'I was brought on board as a frontend developer, but later I also assisted on system and cloud administration.',
      },
      {
        docTag: 'responsibilities',
        type: 'list',
        content: ['doing this', 'doing that'],
      },
      {
        docTag: 'tags',
        type: 'array',
        content: ['javascript', 'html'],
      },
    ],
  },
]

const Portfolio = props => {
  const [theme, setTheme] = useState('dark')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <GlobalStyle theme={theme} />
      <Header />
      <About />
      <Stack />
      <ParallaxDivider>
        <Desk />
      </ParallaxDivider>
      <DocsContainer>
        <Heading>Work</Heading>
        {jobs.map(project => (
          <JSDoc docSections={project.docSections} />
        ))}
      </DocsContainer>
      <DocsContainer>
        <Heading>Community</Heading>
        {communityProjects.map(project => (
          <JSDoc docSections={project.docSections} />
        ))}
      </DocsContainer>
      <ParallaxDivider>
        <City />
      </ParallaxDivider>
      <Menu />
    </ThemeContext.Provider>
  )
}

export default Portfolio
