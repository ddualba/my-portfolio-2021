const addl_projs = [
  // projects that have been removed from portfolio because they are
  // either not that impressive, have no customizations, or are difficult
  // to evaluate.  Might be added back if improvements can be made.

  // DevConnector - removed because there were no customizations made,
  // also requires a login, so difficult to eval
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
    desc: 'MERN full stack app, built a social network app for developers that has profiles, posts and comments.',
    deployedTo: 'Heroku',
    appUrl: 'https://murmuring-waters-30608.herokuapp.com/',
    repoUrl: 'https://github.com/ddualba/devconnectorDD2',
    customized: false,
    customizations: ''
  },
  // It logger removed because no customizations were made.
  // possible imrovements... update to current versions, convert to MUI, add auth
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
    desc: 'Create technicians, log and update IT issues.  Uses materialize css framework to enhance ui and provide modals.',
    deployedTo: 'Currently Undeployed',
    appUrl: '',
    repoUrl: 'https://github.com/ddualba/react-it-logger',
    customized: false,
    customizations: ''
  },

  // Natours removed, no customs, not impressive

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
    desc: 'Advanced CSS and Sass Course project. Functional practice coding and compiling sass while working with media queries, responsive design, BEM, 7-1 Sass Architecture.',
    deployedTo: 'Github Pages',
    appUrl: 'https://ddualba.github.io/advcss-natours/',
    repoUrl: 'https://github.com/ddualba/advcss-natours',
    customized: true,
    customizations:
      'Expanded npm build process, installed gh-pages and deployed'
  },

  // Trillo removed, no customs, not impressive

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
    desc: 'Advanced CSS and Sass Course project. Functional practice coding and compiling sass while working with media queries, responsive design, BEM, 7-1 Sass Architecture.',
    deployedTo: 'Github Pages',
    appUrl: 'https://ddualba.github.io/advcss-trillo/',
    repoUrl: 'https://github.com/ddualba/advcss-trillo',
    customized: true,
    customizations:
      'Expanded npm build process, installed gh-pages and deployed'
  }
];
