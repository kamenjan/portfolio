import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { media, size } from '../../defines/media'

import ScreensIconSVG from './ScreensIconSVG'
import GearsIconSVG from './GearsIconSVG'

const Container = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;

  max-width: 360px;
  margin-left: auto;
  margin-right: auto;

  text-align: center;
  color: var(--color-contrast, '#a9b7c6');

  h2 {
    font-size: 12px;
    &:before {
      content: '// ';
    }
  }
  h3 {
    font-size: 12px;
  }

  @media ${media.SM} {
    max-width: ${`${size.SM}px`};
    h2 {
      font-size: 14px;
    }
    h3 {
      font-size: 14px;
    }
  }
  @media ${media.MD} {
    max-width: 768px;
    h2 {
      font-size: 16px;
    }
    h3 {
      font-size: 16px;
    }
  }
  @media ${media.LG} {
    max-width: 1024px;
    h2 {
      font-size: 18px;
    }
    h3 {
      font-size: 18px;
    }
  }
  @media ${media.XL} {
    max-width: 1280px;
    h2 {
      font-size: 20px;
    }
    h3 {
      font-size: 20px;
    }
  }
`
const StackGroup = styled.div`
  @media ${media.LG} {
    width: 50%;
  }
`
const ItemList = styled.span`
  font-size: 12px;
  &:before {
    content: '[ ';
  }
  &:after {
    content: ' ]';
  }
`
const Item = styled.span`
  color: green;
  &:after {
    content: ', ';
    color: orange;
  }
  &:last-child:after {
    display: none;
  }
`
const IconContainer = styled.div`
  color: green;
  &:after {
    content: ', ';
    color: orange;
  }
  &:last-child:after {
    display: none;
  }
`

const Stack = ({ stack }) => {
  return (
    <Container>
      {stack.map((stackSection, i) => {
        const Icon = stackSection.icon
        return (
          <StackGroup key={i}>
            <Icon />
            {stackSection.sections.map((section, i) => (
              <section key={i}>
                <h2>{section.title}</h2>
                {section.subsections.map((subsection, i) => (
                  <div key={i}>
                    <h3>{subsection.title}:</h3>
                    <ItemList>
                      {subsection.itemList.map((item, i) => (
                        <Item key={i}>'{item}'</Item>
                      ))}
                    </ItemList>
                  </div>
                ))}
              </section>
            ))}
          </StackGroup>
        )
      })}
    </Container>
  )
}

Stack.defaultProps = {
  stack: [
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
  ],
}

export default Stack
