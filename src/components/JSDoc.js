import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-size: 20px;
  font-family: 'Lucida Console', Monaco, monospace;
  color: var(--color-contrast, #2b2b2b);
  display: block;

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
      content: '*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A*\\A';
      white-space: pre;
      position: absolute;
      top: 0;
      left: 0.6em;
      height: 100%;
    }
  }
`
const Tag = styled.div`
  &:after {
    display: ${props => (props.lineBreakAfter ? 'block' : 'none')};
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
const TagArray = styled.span`
  //display: none;
  & > *:not(:last-child):after {
    white-space: pre;
    content: ', ';
  }
`

const JSDoc = props => {
  return (
    <Container>
      <section>
        {props.docSections.map((docSection, i) => {
          switch (docSection.type) {
            case 'paragraph':
              return (
                <Tag key={i} lineBreakAfter={docSection.lineBreakAfter}>
                  <TagName>{docSection.docTag}</TagName>
                  <span>{docSection.content}</span>
                </Tag>
              )
            case 'array':
              return (
                <Tag key={i} lineBreakAfter={docSection.lineBreakAfter}>
                  <TagName>{docSection.docTag}</TagName>
                  <TagArray>
                    {docSection.content.map((arrayItem, i) => (
                      <span key={i}>{arrayItem}</span>
                    ))}
                  </TagArray>
                </Tag>
              )
            case 'list':
              return (
                <Tag key={i} lineBreakAfter={docSection.lineBreakAfter}>
                  <TagName>{docSection.docTag}</TagName>
                  <ul>
                    {docSection.content.map((listItem, i) => (
                      <li key={i}>{listItem}</li>
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

export default JSDoc
