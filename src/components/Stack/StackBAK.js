import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { media } from '../../defines/media'

const stack = {
  frontendSections: [
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
            'React',
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
  backendSection: [
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
}

const StyledStack = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;

  justify-content: center;

  max-width: 360px;
  margin-left: auto;
  margin-right: auto;

  color: var(--color-contrast);

  @media ${media.SM} {
    max-width: 470px;
    font-size: 16px;
  }
  @media ${media.MD} {
    max-width: 768px;
    font-size: 18px;
  }
  @media ${media.LG} {
    max-width: 1024px;
    font-size: 20px;
  }
  @media ${media.XL} {
    max-width: 1280px;
    font-size: 22px;
  }
`
const StyledStackSection = styled.div`
  display: inline-block;
  text-align: center;
  @media ${media.LG} {
    width: 50%;
  }
`
const StyledSectionTitle = styled.h1`
  text-align: center;
  color: grey;
  margin-top: 32px;
  font-size: 18px;
`
const StyledSubsectionTitle = styled.h2`
  text-align: center;
  color: var(--color-contrast);
  margin-top: 20px;
  margin-bottom: 4px;
  font-size: 14px;
`
const StyledItems = styled.p`
  font-size: 13px;
  line-height: 1.7em;
`
const StyledItem = styled.span`
  color: green;
`
const StyledComma = styled.span`
  color: orange;
`

const Stack = props => {
  return (
    <StyledStack>
      {Object.keys(stack).map((stackSection, i) => (
        <StyledStackSection key={i}>
          {stack[stackSection].map((section, i) => (
            <React.Fragment key={i}>
              <StyledSectionTitle>
                &#47;&#47; {section.title}
              </StyledSectionTitle>
              {section.subsections.map((subsection, i) => (
                <React.Fragment key={i}>
                  <StyledSubsectionTitle>
                    {subsection.title}:
                  </StyledSubsectionTitle>
                  <StyledItems>
                    <span>[&nbsp;</span>
                    {subsection.itemList.map((item, i, arr) => (
                      <React.Fragment key={i}>
                        <StyledItem>'{item}'</StyledItem>
                        {i !== arr.length - 1 && <StyledComma>, </StyledComma>}
                      </React.Fragment>
                    ))}
                    <span>&nbsp;]</span>
                  </StyledItems>
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </StyledStackSection>
      ))}
    </StyledStack>
  )
}

export default Stack
