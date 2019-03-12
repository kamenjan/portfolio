import React from 'react'
import styled from 'styled-components'
import { media } from '../../defines/media'

const Container = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;

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
    h2 {
      font-size: 14px;
    }
    h3 {
      font-size: 14px;
    }
  }
  @media ${media.MD} {
    h2 {
      font-size: 16px;
    }
    h3 {
      font-size: 16px;
    }
  }
  @media ${media.LG} {
    h2 {
      font-size: 18px;
    }
    h3 {
      font-size: 18px;
    }
  }
  @media ${media.XL} {
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

const Stack = props => {
  return (
    <Container>
      {props.stack.map((stackSection, i) => {
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

export default Stack
