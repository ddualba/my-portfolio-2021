import React, { Fragment } from 'react';

// HashRouter was necessary when hosted on github, but can now use BrowserRouter
// import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Routes from './components/routes/Routes';

import './App.scss';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route component={Routes} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
