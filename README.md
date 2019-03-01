# Portfolio

Personal portfolio built with React. I really wanted to try all the new things that were introduced in version 16.8 and portfolio was still on the TODO list.

Project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), but at the time 16.8 was still in alpha. TODO: Bump to stable. 

I've also added custom deploy script using [gh-pages](https://www.npmjs.com/package/gh-pages) package. It gets deploy destination from "homepage" package.json tag. To compile and run production build change "hompage" to "/".

Tags: React, hooks, memoize, styled-components,

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
props: 
	- <MenuItem> array
		- item.svg/icon
		- item.title
		- item.desktop-horizontal-align(left/right)

defines:
	- consecutive number (n,n+1,..)
	- css styles (font,color/mobileVSdesktop)
		- item-height
		- mobile-container-height = item.length * item-height + 1 // (1 for burger button padding when menu is opened on mobile screen)
		
##### <MenuItem>
props: 
    - svg/icon
    - title
    - desktop-horizontal-align(left/right)
    
##### <AboveTheFold>
##### <HeroArea>
##### About
##### ParallaxBackground
##### StackGroup
##### SVG
##### Title
##### JSDoc


## Issues, notes & todos 

### Styled Components

https://jsramblings.com/2018/02/04/styled-components-media-queries.html


### Hooks

https://daveceddia.com/useeffect-hook-examples/


github pages deploy:

https://medium.com/@_mariacheline/deploy-create-react-app-project-to-github-pages-2eb6deda5b89

