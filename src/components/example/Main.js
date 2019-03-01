import React from 'react'

// Need babel-macros because cra does not give me access to babelrc and other
import styled from 'styled-components/macro'
import { compose } from '../../utils/functional'

// Header container CSS
const WithCommonStyles = component => styled(component)`
  display: none;
`

// Slide styled div element
const FirstSection = styled.div`
  display: inline-block;
  text-align: center;
`

const Main = props => {
  return (
    <div className={'main-container'}>
      <div className={'section first-section'}>
        <div className='container'>
          <h2>Who am I?</h2>
          <p>
            Conscious, pragmatic and curios being. Amazed by progress made in
            the field of computer science, especially the phenomena that is the
            Internet. Modern computer systems were always part of my life so it
            naturally made sense to delve deeper.
          </p>
          <p>
            I enjoy building web applications and solving programming
            challenges. Most of my love goes out to JavaScript because it's
            turning into a modern, reliable programming language. With help of
            Node.js it is no longer bounded by browser environment and ES6/ES7
            standards made it's syntax more concise.
          </p>
          <p>
            When I'm not building web or solving programming challenges on
            different coding sites I like to play strategic and fantasy board
            games.
          </p>
        </div>
      </div>
      <div className='first-parallax' />
      <div className={'section first-section'}>
        <div className='container'>
          <h2>Skill set</h2>
          <p>
            Conscious, pragmatic and curios being. Amazed by progress made in
            the field of computer science, especially the phenomena that is the
            Internet. Modern computer systems were always part of my life so it
            naturally made sense to delve deeper.
          </p>
        </div>
      </div>
      <div className='first-parallax' />
      <div className={'section second-section'}>
        <div className='container'>
          <h2>Jobs</h2>
          <div>
            <h3>Termitnjak</h3>
            <p>Frontend web developer</p>
            <p>
              I have joined Termitnjak d.o.o. in 2015. Termitnjak offers web
              development, consulting and hosting services to EU and worldwide
              markets while striving towards a specialisation in Open Source and
              Python based frameworks, specifically Plone, Pyramid and Kotti.
              Termitnjak gave me the opportunity to start my professional career
              as a web developer while learning so much in so little time.
            </p>
            <p>projects:</p>
            <p>
              <a href='https://www.archicubator.com/en'>Archi</a>
            </p>
            <p>
              <a href='https://waammat.com/'>waammat</a>
            </p>
          </div>
          <div>
            <h3>Consoriana</h3>
            <p>Web developer</p>
            <p>Building commercial and in-house management software.</p>
            <p>projects:</p>
            <p>
              <a href='http://deepbluesw.com/'>deepblue</a>
              <a href='http://deepbluesw.com/wp-content/uploads/2018/09/DEEP-BLUE_Brochure_2018.pdf'>
                deepblue brochure
              </a>
            </p>
            <p>
              <a href='http://paktmedia.com/'>Pakt home site</a>
            </p>
            <p>
              <a href='http://adriapharm.com'>adriaPharm</a>
            </p>
          </div>
        </div>
      </div>
      <div className={'section third-section'}>
        <div className='container'>
          <h2>Community Projects</h2>
          <p>termitnjak dragon sprint lj</p>
          <p>react meetup</p>
        </div>
      </div>
    </div>
  )
}

export default compose(
  React.memo,
  WithCommonStyles,
)(Main)
