import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

const StyledStack = styled.div`
  overflow: hidden;
  will-change: rChannel;
`

const Stack = props => {
  return (
    <StyledStack>
      <div className='container'>
        <h1>// JavaScript</h1>
        <h2>specifications_&_compiler:</h2>
        <p>
          <span className='bracket'>[</span> 'ES2018+'
          <span className='comma'>,</span>
          'Babel' <span className='bracket'>]</span>
        </p>
        <h2>build_&_dev_tools:</h2>
        <p>
          <span className='bracket'>[</span> 'npm'
          <span className='comma'>,</span>
          'Webpack'<span className='comma'>,</span> 'ESLint'
          <span className='comma'>,</span>
          'Prettier' <span className='bracket'>]</span>
        </p>
        <h2>libraries_&_frameworks:</h2>
        <p>
          <span className='bracket'>[</span> 'React'
          <span className='comma'>,</span>
          'Redux'<span className='comma'>,</span> 'Materail-UI'
          <span className='comma'>,</span>
          'Electron'<span className='comma'>,</span> 'jQuery'
          <span className='comma'>,</span>
          'GSAP'<span className='comma'>,</span> 'Lottie'
          <span className='comma'>,</span>
          'HTML5 Canvas' <span className='bracket'>]</span>
        </p>
        <h1>// Layout & Styling</h1>
        <h2>preprocessors:</h2>
        <p>
          <span className='bracket'>[</span> 'SASS'
          <span className='comma'>,</span>
          'LESS'<span className='comma'>,</span> 'CSS-in-JS'
          <span className='bracket'>]</span>
        </p>
        <h2>tools:</h2>
        <p>
          <span className='bracket'>[</span> 'Flexbox'
          <span className='comma'>,</span>
          'Grid'<span className='comma'>,</span> 'Bootstrap'
          <span className='comma'>,</span>
          'CSS Variables'<span className='comma'>,</span> 'CCS Animations'
          <span className='bracket'>]</span>
        </p>
        <h1>// Design Tools</h1>
        <h2>apps:</h2>
        <p>
          <span className='bracket'>[</span> 'Sketch'
          <span className='comma'>,</span>
          'Adobe Photoshop' <span className='bracket'>]</span>
        </p>
      </div>
      <div className='container'>
        <h1>// Development Environment</h1>
        <h2>code_versioning:</h2>
        <p>
          <span className='bracket'>[</span> 'Git'
          <span className='comma'>,</span>
          'Subversion' <span className='bracket'>]</span>
        </p>
        <h2>ide_&_editors:</h2>
        <p>
          <span className='bracket'>[</span> 'Sublime Text'
          <span className='comma'>,</span>
          'WebStorm'<span className='comma'>,</span> 'NetBeans'
          <span className='bracket'>]</span>
        </p>
        <h2>languages:</h2>
        <p>
          <span className='bracket'>[</span> 'JavaScript'
          <span className='comma'>,</span>
          'PHP'<span className='comma'>,</span> 'Java'
          <span className='comma'>,</span>
          'C#'<span className='comma'>,</span> 'Bash'
          <span className='bracket'>]</span>
        </p>
        <h2>os:</h2>
        <p>
          <span className='bracket'>[</span> 'osx'
          <span className='comma'>,</span>
          'ubuntu'<span className='comma'>,</span> 'debian'
          <span className='bracket'>]</span>
        </p>
        <h1>// Servers & Server Scripting</h1>
        <h2>servers:</h2>
        <p>
          <span className='bracket'>[</span> 'Apache'
          <span className='comma'>,</span>
          'Nginx'<span className='comma'>,</span> 'Node.js'
          <span className='bracket'>]</span>
        </p>
        <h2>frameworks:</h2>
        <p>
          <span className='bracket'>[</span> 'Express'
          <span className='comma'>,</span>
          'CodeIgniter' <span className='bracket'>]</span>
        </p>
        <h1>// Data</h1>
        <h2>rdbms:</h2>
        <p>
          <span className='bracket'>[</span> 'MySQL'
          <span className='comma'>,</span>
          'PostgreSQL'<span className='comma'>,</span> 'SQLite'
          <span className='bracket'>]</span>
        </p>
        <h2>native:</h2>
        <p>
          <span className='bracket'>[</span> 'JSON'
          <span className='comma'>,</span>
          'XML' <span className='bracket'>]</span>
        </p>
      </div>
    </StyledStack>
  )
}

export default Stack
