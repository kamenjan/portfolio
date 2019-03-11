import React from 'react'
import styled from 'styled-components'

import { media, size } from '../defines/media'

const Container = styled.div`
  font-size: 20px;
  font-family: 'Lucida Console', Monaco, monospace;
  color: var(--color-contrast, #2b2b2b);

  &::before {
    color: grey;
    content: '/**';
    white-space: pre;
  }

  &::after {
    color: grey;
    content: ' */';
    white-space: pre;
  }

  section {
    position: relative;
    overflow: hidden;
    padding-left: 1.8em;

    &::before {
      color: grey;
      /* note: "\\A" in "content" create line break */
      content: '*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A';
      white-space: pre;
      position: absolute;
      top: 0;
      left: 0.6em;
      height: 100%;
    }
  }

  @media ${media.MD} {
    width: 50%;
  }
`
const Tag = styled.span`
  &:not(:last-child):after {
    display: block;
    content: ' ';
    white-space: pre;
  }

  ul {
    li {
      &:before {
        content: ' - ';
        white-space: pre;
      }
    }
  }
`
const TagName = styled.span`
  color: green;
  &:before {
    content: '@';
  }
  &:after {
    content: ' ';
  }
`

const JSDoc = props => {
  return (
    <Container>
      <section>
        {props.docSections.map(jobSection => {
          switch (jobSection.type) {
            case 'paragraph':
              return (
                <Tag>
                  <TagName>{jobSection.docTag}</TagName>
                  {jobSection.content}
                </Tag>
              )
            case 'array':
              return (
                <Tag>
                  <TagName>{jobSection.docTag}</TagName>
                  {jobSection.content.map(arrayItem => (
                    <span>{arrayItem}</span>
                  ))}
                </Tag>
              )
            case 'list':
              return (
                <Tag>
                  <TagName>{jobSection.docTag}</TagName>
                  <ul>
                    {jobSection.content.map(listItem => (
                      <li>{listItem}</li>
                    ))}
                  </ul>
                </Tag>
              )
            default:
              return null
          }
        })}
      </section>
    </Container>
  )
}

JSDoc.defaultProps = {
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
}

export default JSDoc
