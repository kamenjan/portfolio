import GearsIconSVG from '../components/Stack/GearsIconSVG'
import ScreensIconSVG from '../components/Stack/ScreensIconSVG'

const stackData = [
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
              'CSS Variables & Animations',
              'Flexbox',
              'Grid',
              'Bootstrap',
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
export default stackData
