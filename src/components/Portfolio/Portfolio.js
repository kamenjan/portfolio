import React, { useContext } from 'react'

import ThemeContext from '../../context/theme'
import ModalContext from '../../context/modal'

// Site data feeds
import {
  headerData,
  aboutData,
  menuItems,
  stackData,
  jobData,
  communityData,
} from '../../content/index'

import { media, size } from '../../utils/media'
import styled from 'styled-components'

import GlobalStyle from '../GlobalStyle/GlobalStyle'
import Header from '../Header/Header'
import About from '../About/About'
import Stack from '../Stack/Stack'
import JSDoc from '../JSDoc/JSDoc'
import ParallaxDivider from '../ParallaxDivider/ParallaxDivider'
import Desk from '../ParallaxDivider/Desk/Desk'
import City from '../ParallaxDivider/City/City'
import Menu from '../Menu/Menu'
import Modal from '../Modal/Modal'

const SiteSection = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 360px;

  margin-top: 24px;
  margin-bottom: 24px;

  @media ${media.SM} {
    max-width: ${`${size.SM}px`};
  }
  @media ${media.MD} {
    margin-top: 42px;
    margin-bottom: 42px;
    max-width: ${`${size.MD}px`};
  }
  @media ${media.LG} {
    max-width: ${`${size.LG}px`};
  }
`
const Heading = styled.h1`
  width: 100%;
  margin-top: 32px;
  margin-bottom: 28px;
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
    font-size: 34px;
  }
  @media ${media.MD} {
    font-size: 36px;
  }
  @media ${media.LG} {
    margin-top: 62px;
    margin-bottom: 58px;
    font-size: 38px;
  }
  @media ${media.XL} {
    font-size: 40px;
  }
`
const DocsContainer = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;

  font-size: 12px;
  line-height: 1.7em;

  @media ${media.SM} {
    font-size: 15px;
  }

  @media ${media.MD} {
    font-size: 14px;
  }

  @media ${media.LG} {
    font-size: 17px;
  }

  @media ${media.XL} {
    font-size: 18px;
  }

  // All stack containers
  & > * {
    padding: 0 12px;
    margin-bottom: 30px;
    @media ${media.MD} {
      width: 50%;
    }
  }
`

const Portfolio = () => {
  const { theme } = useContext(ThemeContext)
  const { modalOpened } = useContext(ModalContext)

  return (
    <>
      <GlobalStyle theme={theme} />
      <Header name={'topScrollAnchor'} headerData={headerData} />
      <SiteSection>
        <About aboutData={aboutData} />
      </SiteSection>
      <SiteSection name={'stackScrollAnchor'}>
        <Heading>Stack</Heading>
        <Stack stack={stackData} />
      </SiteSection>
      <ParallaxDivider>
        <Desk />
      </ParallaxDivider>
      <SiteSection name={'workScrollAnchor'}>
        <Heading>Work</Heading>
        <DocsContainer>
          {jobData.map(({ docSections }, i) => (
            <JSDoc key={i} docSections={docSections} />
          ))}
        </DocsContainer>
      </SiteSection>
      <SiteSection name={'communityScrollAnchor'}>
        <Heading>Community</Heading>
        <DocsContainer>
          {communityData.map(({ docSections }, i) => (
            <JSDoc key={i} docSections={docSections} />
          ))}
        </DocsContainer>
      </SiteSection>
      <ParallaxDivider>
        <City />
      </ParallaxDivider>
      {modalOpened && <Modal />}
      <Menu menuItems={menuItems} />
    </>
  )
}

export default React.memo(Portfolio)
