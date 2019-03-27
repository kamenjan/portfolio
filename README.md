# Portfolio

Personal portfolio built with React. I really wanted to try all the new things that were introduced in version 16.8 and portfolio was still on the TODO list.

Project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), but at the time 16.8 was still in alpha. TODO: Bump to stable. 

I've also added custom deploy script using [gh-pages](https://www.npmjs.com/package/gh-pages) package. It gets deploy destination from "homepage" package.json tag. To compile and run production build change "hompage" to "/".

Tags: React, hooks, memoize, styled-components66655

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run deploy`

I've also added custom deploy script using [gh-pages](https://www.npmjs.com/package/gh-pages) package. It gets deploy destination from "homepage" package.json tag. To compile and run production build change "hompage" to "/".

## Roadmap

### 1. Create assets & content, define layout & functionality [DONE]

#### functionality:

change theme (dark/light)

this cold be done via tmux like "status bar" at the bottom of the page
(it could also show users public ip, device, time, ...)

#### theme:
sections with background photos in-between. background photos can have parallax scroll effect or not, try both.

use code editor design. colors should match darkcula editor theme. structure and syntax will imitate that of javascript.
brackets for arrays, parentheses for objects, lowercase initials, backslashes for comments, ...

But do not trade accuracy for accessibility! 

##### color scheme:
###### dark
- $bgColor-primary: #2b2b2b;
- $fontColor-primary: #808080;
- $fontColor-secondary: #629755;
- $fontColor-tertiary: #cc7832;
- $fontColor-link: #287bde;
- $fontColor-link-hover: #ab51ba;
- $fontColor-link-visited: #ab51ba;

###### light
- $bgColor-primary: #F0F0F0;
- $fontColor-primary: #808080;
- $fontColor-secondary: #008000;
- $fontColor-tertiary: #cc7832;

#### content:


### 2. Create a static site for prototyping using only basic build tools [DONE]

[Static site](https://github.com/kamenjan/portfolio-mockup) (private)

Tools: babel, eslint, sass, hotreload, flexbox


### 3. Build the production version using React and GitHub Pages 

#### Components

##### <Menu>
##### <MenuItem>
##### <AboveTheFold>
##### <HeroArea>
##### About
##### ParallaxBackground
##### StackGroup
##### SVG
##### Title
##### JSDoc

## Issues, notes & todos

### TODO:
- define all styling constants
- ~insert content~
- type check all content
- finalize mobile menu

### SVGs

There is some funny stuff surrounding SVGs. It mostly has to do with outdated specs and discontinued development :(
But they remain awesome tool for optimized animations and still feel most native to web environment.

I've created some custom svg icons for this project. Workflow is still a bit fuzzy, but the main idea is to create them using Sketch. Note that all smaller components inside icon's bounding rectangle should have placeholders so that there is no transformation in Sketch svg code output - flatten does not work as one would imagine. Also masks created in Sketch crop their content if it exceeds masks bounding rectangle. This is solved by exporting content separately and fusing it in code.

For implementing svgs in React I decided to wrap them in components. This allows me to treat them the same as all other presentational components, including styled components. Unfortunately I used classes for styling in the first iteration of svg implementation without React. Idea is to remove classes and define the best svg to react workflow.

I'm also using svg.js as quality of life plugin for manipulating svgs.

Light weight library for manipulating SVG assets: http://svgjs.com
Nice example of isometric SVG asset with clean structure: https://github.com/projapati66/Svg-IsometricCityAnimation
Notes on SVG Namespaces: https://developer.mozilla.org/en-US/docs/Web/SVG/Namespaces_Crash_Course
SVG to Native React Component converter: https://github.com/smooth-code/svgr
SVGO list of plugins: https://github.com/svg/svgo
SVG specs and 3D compatibility issues: https://greensock.com/forums/topic/12022-3d-transform-not-working-in-firefox/

Exporting SVGs using Sketch, best practices: 
https://medium.com/sketch-app-sources/the-best-way-to-export-an-svg-from-sketch-dd8c66bb6ef2
https://medium.com/sketch-app-sources/exploring-ways-to-export-clean-svg-icons-with-sketch-the-correct-way-752e73ec4694

Sketch preferences: https://www.sketchapp.com/docs/preferences//?utm_source=designernews
Animating along a path using GSAP: https://greensock.com/forums/topic/13581-animate-svg-object-along-motion-path/

### Default props and prop check

This seems like an elegant way to provide default values to my presentational components (mostly styling stuff).

https://stackoverflow.com/questions/38786973/how-to-set-component-default-props-on-react-component

### Styled Components

https://jsramblings.com/2018/02/04/styled-components-media-queries.html

#### CSS tricks

using relative size for fonts to avoid setting size in pixels for all the different layouts: https://css-tricks.com/viewport-sized-typography/

### Hooks

https://daveceddia.com/useeffect-hook-examples/

https://overreacted.io/a-complete-guide-to-useeffect/

useContext. I'm having some issues with data flow and relationship between providers and consumers.

https://stackoverflow.com/questions/41030361/how-to-update-react-context-from-inside-a-child-component

### Memoize app

Check which components get unnecessary re-renders and memoize them


### Nav bar scrolling

https://scotch.io/tutorials/implementing-smooth-scrolling-in-react


### Deploy process 

github pages deploy:

https://medium.com/@_mariacheline/deploy-create-react-app-project-to-github-pages-2eb6deda5b89


### Using macros for creating JSDoc comment block in WebStorm

https://www.jetbrains.com/help/webstorm/creating-jsdoc-comments.html


### Combining styled components and react transitions 

https://stackoverflow.com/questions/42660907/using-reactcsstransitiongroup-with-styled-component


### mobile url bar resizing and positioning

https://developers.google.com/web/updates/2016/12/url-bar-resizing


### proxying api request in cra development instance

https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development

