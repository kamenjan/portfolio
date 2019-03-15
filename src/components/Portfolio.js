import React, { useState } from 'react'

import ThemeContext from '../context/theme'

import { createGlobalStyle } from 'styled-components/macro'
import 'normalize.css'
import { media, size } from '../defines/media'
import styled from 'styled-components'

import Header from './Header/Header'
import About from './About/About'

import Stack from './Stack/Stack'
import GearsIconSVG from './Stack/GearsIconSVG'
import ScreensIconSVG from './Stack/ScreensIconSVG'

import JSDoc from './JSDoc'

import ParallaxDivider from './ParallaxDivider/ParallaxDivider'
import Desk from './ParallaxDivider/Desk/Desk'
import City from './ParallaxDivider/City/City'

import Menu from './Menu/Menu'
import HomeIcon from './svg/HomeIconSVG'
import StackIcon from './svg/StackIconSVG'
import KeyboardIcon from './svg/KeyboardIconSVG'
import CommunityIcon from './svg/CommunityIconSVG'

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
    height: 100%;
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
// const AboveTheFold = styled.div``
const SiteSection = styled.div`
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
  //margin-top: 48px;
  margin-bottom: 38px;
  font-size: 30px;

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
  @media ${media.SM} {
    margin-top: 48px;
    font-size: 34px;
  }
  @media ${media.MD} {
    margin-top: 48px;
    font-size: 36px;
  }
  @media ${media.LG} {
    margin-top: 48px;
    margin-bottom: 62px;
    font-size: 38px;
  }
  @media ${media.XL} {
    margin-top: 48px;
    font-size: 40px;
  }
`
const DocsContainer = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  & > * {
    @media ${media.MD} {
      width: 50%;
    }
  }
`

const jobs = [
  {
    docSections: [
      {
        docTag: 'name',
        type: 'paragraph',
        lineBreakAfter: true,
        content: (
          <span>
            <a href=''>termitnjak</a> 2020-2030
          </span>
        ),
      },
      {
        docTag: 'summary',
        type: 'paragraph',
        lineBreakAfter: true,
        content:
          'Small company offering B2B and B2C web development, consulting and hosting services to EU and worldwide markets.',
      },
      {
        docTag: 'role',
        type: 'paragraph',
        lineBreakAfter: true,
        content:
          'I was brought on board as a frontend developer, but later I also assisted on system and cloud administration.',
      },
      {
        docTag: 'responsibilities',
        type: 'list',
        lineBreakAfter: true,
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
const techStack = [
  {
    icon: ScreensIconSVG,
    sections: [
      {
        title: 'JavaScript',
        subsections: [
          {
            title: 'specifications_&_compiler',
            itemList: ['ES2018+', 'Babel'],
          },
          {
            title: 'build_&_dev_tools',
            itemList: ['npm', 'Webpack', 'ESLint', 'Prettier'],
          },
          {
            title: 'libraries_&_frameworks',
            itemList: [
              'Angular',
              'Redux',
              'Materail-UI',
              'Electron',
              'jQuery',
              'GSAP',
              'Lottie',
              'HTML5 Canvas',
            ],
          },
        ],
      },
      {
        title: 'Layout & Styling',
        subsections: [
          {
            title: 'preprocessors',
            itemList: ['SASS', 'LESS', 'CSS-in-JS'],
          },
          {
            title: 'tools',
            itemList: [
              'Flexbox',
              'Grid',
              'Bootstrap',
              'CSS Variables',
              'CCS Animations',
            ],
          },
        ],
      },
      {
        title: 'Design Tools',
        subsections: [
          {
            title: 'apps',
            itemList: ['Sketch', 'Adobe Photoshop'],
          },
        ],
      },
    ],
  },
  {
    icon: GearsIconSVG,
    sections: [
      {
        title: 'Development Environment',
        subsections: [
          {
            title: 'code_versioning',
            itemList: ['Git', 'Subversion'],
          },
          {
            title: 'ide_&_editors',
            itemList: ['Sublime Text', 'WebStorm', 'NetBeans'],
          },
          {
            title: 'languages',
            itemList: ['JavaScript', 'PHP', 'Java', 'C#', 'Bash'],
          },
          {
            title: 'os',
            itemList: ['osx', 'ubuntu', 'debian'],
          },
        ],
      },
      {
        title: 'Servers & Server Scripting',
        subsections: [
          {
            title: 'servers',
            itemList: ['Apache', 'Nginx', 'Node.js'],
          },
          {
            title: 'frameworks',
            itemList: ['Express', 'CodeIgniter'],
          },
        ],
      },
      {
        title: 'Data',
        subsections: [
          {
            title: 'rdbms',
            itemList: ['MySQL', 'PostgreSQL', 'SQLite'],
          },
          {
            title: 'native',
            itemList: ['JSON', 'XML'],
          },
        ],
      },
    ],
  },
]

const Portfolio = () => {
  const [theme, setTheme] = useState('dark')
  const menuProps = {
    itemHeight: 42,
    items: [
      {
        icon: HomeIcon,
        value: 'Top',
        scrollTo: 'topScrollAnchor',
      },
      {
        icon: StackIcon,
        value: 'Stack',
        scrollTo: 'stackScrollAnchor',
      },
      {
        icon: KeyboardIcon,
        value: 'Work',
        scrollTo: 'workScrollAnchor',
      },
      {
        icon: CommunityIcon,
        value: 'Community',
        scrollTo: 'communityScrollAnchor',
      },
    ],
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <GlobalStyle theme={theme} />
      <Header name={'topScrollAnchor'} />
      <SiteSection>
        <About />
      </SiteSection>
      <SiteSection name={'stackScrollAnchor'}>
        <Heading>Stack</Heading>
        <Stack stack={techStack} />
      </SiteSection>
      <ParallaxDivider>
        <Desk />
      </ParallaxDivider>
      <SiteSection name={'workScrollAnchor'}>
        <Heading>Work</Heading>
        <DocsContainer>
          {jobs.map((job, i) => (
            <JSDoc key={i} docSections={job.docSections} />
          ))}
        </DocsContainer>
      </SiteSection>
      <SiteSection name={'communityScrollAnchor'}>
        <Heading>Community</Heading>
        <DocsContainer>
          {communityProjects.map((project, i) => (
            <JSDoc key={i} docSections={project.docSections} />
          ))}
        </DocsContainer>
      </SiteSection>
      <ParallaxDivider>
        <City />
      </ParallaxDivider>
      <Menu {...menuProps} />
    </ThemeContext.Provider>
  )
}

export default Portfolio
