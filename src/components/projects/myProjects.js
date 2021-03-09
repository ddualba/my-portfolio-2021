export const myProjects = [
  {
    id: 2,
    stackType: 'NODEJS / PUPPETEER',
    name: 'Stock WebScraper',
    fullstack: false,
    front: '',
    back: 'NodeJS',
    db: 'None',
    addlPackages: 'puppeteer',
    cssFramework: '',
    projectType: 'Personal',
    desc:
      'Node terminal app that searches several websites for stock availability, terminal notification of availability  ',
    deployedTo: 'not deployed',
    appUrl: '',
    repoUrl: 'https://github.com/ddualba/xstock-scraper',
    customized: true,
    customizations:
      'Run for a various amount of cycles. Automates login process to Costco, necessary to view stock availability.  Sends discord message via axios post when available.'
  },
  {
    id: 2,
    stackType: 'REACT',
    name: 'Portfolio Site',
    fullstack: false,
    front: 'React',
    back: 'None',
    db: 'None',
    addlPackages: 'react-bootstrap, react-router-dom, react-icons',
    cssFramework: 'React Bootstrap 1.4',
    projectType: 'Personal',
    desc:
      'Repsonsive React Portfolio site built with bootstrap for navbar, cards, and modals.  ',
    deployedTo: 'Github Pages',
    appUrl: 'https://ddualba.github.io/my-portfolio-2021',
    repoUrl: 'https://github.com/ddualba/my-portfolio-2021',
    customized: true,
    customizations:
      'Created from scratch. All functional components with hooks. React-router for component routing. '
  },
  {
    id: 16,
    stackType: 'React / CSS Grid / SASS',
    name: 'Nexter Fictional Site',
    fullstack: false,
    front: 'react',
    back: 'None',
    db: 'None',
    addlPackages: 'react, node-sass, gh-pages',
    cssFramework: 'Custom CSS, CSS Grid, Sass',
    projectType: 'Course/Custom',
    desc:
      'Sass / CSS Grid course project converted to a react functional component site',
    deployedTo: 'Github Pages',
    appUrl: 'https://ddualba.github.io/advcss-nexter-react/',
    repoUrl: 'https://github.com/ddualba/advcss-nexter-react',
    customized: true,
    customizations:
      'converted static html/css site to react functional components with sass'
  },
  {
    id: 17,
    stackType: 'Adv. CSS with SASS',
    name: 'Trillo Fictional Site',
    fullstack: false,
    front: 'HTML5',
    back: 'None',
    db: 'None',
    addlPackages: 'node-sass, concat, postcss, npm-run-all',
    cssFramework: 'Custom CSS with Sass',
    projectType: 'Course with customizations',
    desc:
      'Advanced CSS and Sass Course project. Functional practice coding and compiling sass while working with media queries, responsive design, BEM, 7-1 Sass Architecture.',
    deployedTo: 'Github Pages',
    appUrl: 'https://ddualba.github.io/advcss-trillo/',
    repoUrl: 'https://github.com/ddualba/advcss-trillo',
    customized: true,
    customizations:
      'Expanded npm build process, installed gh-pages and deployed'
  },
  {
    id: 18,
    stackType: 'Adv. CSS with SASS',
    name: 'Natours Fictional Site',
    fullstack: false,
    front: 'HTML5',
    back: 'None',
    db: 'None',
    addlPackages: 'node-sass, concat, postcss, npm-run-all',
    cssFramework: 'Custom CSS with Sass',
    projectType: 'Course',
    desc:
      'Advanced CSS and Sass Course project. Functional practice coding and compiling sass while working with media queries, responsive design, BEM, 7-1 Sass Architecture.',
    deployedTo: 'Github Pages',
    appUrl: 'https://ddualba.github.io/advcss-natours/',
    repoUrl: 'https://github.com/ddualba/advcss-natours',
    customized: true,
    customizations:
      'Expanded npm build process, installed gh-pages and deployed'
  },
  {
    id: 19,
    stackType: 'React with SASS',
    name: 'uHost Fictional Site',
    fullstack: false,
    front: 'React',
    back: 'None',
    db: 'None',
    addlPackages: 'react-router-dom, react-transition-group',
    cssFramework: 'Custom CSS',
    projectType: 'Course/Custom',
    desc:
      'CSS3 Course project converted to a react functional component site with SASS.',
    deployedTo: 'Github Pages',
    appUrl: 'https://ddualba.github.io/uhost-react/#/',
    repoUrl: 'https://github.com/ddualba/uhost-react',
    customized: true,
    customizations:
      'converted static html/css site to react functional components with sass'
  },
  {
    id: 20,
    stackType: 'REACT',
    name: 'Github Finder',
    fullstack: false,
    front: 'React, Github API',
    back: 'None',
    db: 'None',
    addlPackages: 'axios, moment',
    cssFramework: 'Custom css',
    projectType: 'Course/Custom',
    desc: 'Search Github profiles and display info and repos of those users',
    deployedTo: 'Netlify',
    appUrl: 'https://githubfinder-ddual01.netlify.app/',
    repoUrl: 'https://github.com/ddualba/react-f2b-githubfinder',
    customized: true,
    customizations:
      'Added ability to view commits within a specific repo and link to them'
  },
  {
    id: 30,
    stackType: 'MERN',
    name: 'Contact Keeper',
    fullstack: true,
    front: 'React',
    back: 'NodeJS, Express, Mongoose',
    db: 'MongoDB',
    addlPackages:
      'jsonwebtoken, express-validator, bcryptjs, redux, redux-thunk, react-transition-group',
    cssFramework: 'Custom css',
    projectType: 'Course/Custom',
    desc:
      'MERN full stack app, full CRUD Backend API to store contacts, search/filter existing contacts.',
    deployedTo: 'Heroku',
    appUrl: 'https://safe-eyrie-57708.herokuapp.com/',
    repoUrl: 'https://github.com/ddualba/react-f2b-contactkeeper',
    customized: true,
    customizations:
      'Course written with useContext, refactored code to use redux instead of useContext.'
  },
  {
    id: 40,
    stackType: 'MERN',
    name: 'DevConnector',
    fullstack: true,
    front: 'React',
    back: 'NodeJS, Express, Mongoose',
    db: 'MongoDB',
    addlPackages:
      'axios, express-validator, jsonwebtoken, bcryptjs, redux, redux-thunk',
    cssFramework: 'Custom css',
    projectType: 'Course',
    desc:
      'MERN full stack app, built a social network app for developers that has profiles, posts and comments.',
    deployedTo: 'Heroku',
    appUrl: 'https://murmuring-waters-30608.herokuapp.com/',
    repoUrl: 'https://github.com/ddualba/devconnectorDD2',
    customized: false,
    customizations: ''
  },
  {
    id: 50,
    stackType: 'REACT / REDUX',
    name: 'IT Logger',
    fullstack: false,
    front: 'React',
    back: 'NodeJS, Express',
    db: 'json-server',
    addlPackages: 'date-fns, redux, redux-thunk',
    cssFramework: 'Materialize-css',
    projectType: 'Course',
    desc:
      'Create technicians, log and update IT issues.  Uses materialize css framework to enhance ui and provide modals.',
    deployedTo: 'Currently Undeployed',
    appUrl: '',
    repoUrl: 'https://github.com/ddualba/react-it-logger',
    customized: false,
    customizations: ''
  }
];
