import React from 'react'
import styled from 'styled-components'
import { media } from '../../utils/media'

const Container = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;

  text-align: center;
  color: var(--color-contrast, '#a9b7c6');

  svg {
    height: 80px;
  }
  h2 {
    margin-top: 32px;
    font-size: 18px;
    color: var(--color-primary, '#a9b7c6');
    &:before {
      content: '//\00a0';
    }
  }
  h3 {
    margin-top: 20px;
    margin-bottom: 4px;
    font-size: 14px;
    &:after {
      content: ':';
    }
  }
  p {
    font-size: 13px;
    line-height: 1.7em;
    &:before {
      content: '[\00a0';
    }
    &:after {
      content: '\00a0]';
    }
  }

  @media ${media.SM} {
    svg {
      height: 100px;
    }
    h2 {
      font-size: 20px;
    }
    h3 {
      font-size: 16px;
    }
    p {
      font-size: 15px;
    }
  }
  @media ${media.MD} {
    svg {
      height: 120px;
    }
    h2 {
      font-size: 22px;
    }
    h3 {
      font-size: 18px;
    }
    p {
      font-size: 17px;
    }
  }
  @media ${media.LG} {
    h2 {
      font-size: 24px;
    }
    h3 {
      font-size: 20px;
    }
    p {
      font-size: 19px;
    }
  }
  @media ${media.XL} {
    h2 {
      font-size: 26px;
    }
    h3 {
      font-size: 22px;
    }
    p {
      font-size: 21px;
    }
  }
`
const StackGroup = styled.div`
  margin-bottom: 46px;
  padding: 0 18px;
  @media ${media.LG} {
    width: 50%;
  }
`
const Item = styled.span`
  color: var(--color-secondary, '#a9b7c6');
  &:before {
    content: "'";
    color: var(--color-tertiary, '#a9b7c6');
  }
  &:after {
    content: "', ";
    color: var(--color-tertiary, '#a9b7c6');
  }
  &:last-child:after {
    //display: none;
    content: "'";
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
                    <h3>{subsection.title}</h3>
                    <p>
                      {subsection.itemList.map((item, i) => (
                        <Item key={i}>{item}</Item>
                      ))}
                    </p>
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

export default React.memo(Stack)
