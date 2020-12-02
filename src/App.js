import React, { Fragment } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Routes from './components/routes/Routes';

import './App.css';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={Routes} />
        </Switch>

        {/* <Container style={{ paddingTop: '60px' }}>
          <Switch>
            <Route exact path='/education' component={CourseList} />
            <Route exact path='/'>
              <Home />
            </Route>
          </Switch>
        </Container> */}
      </Fragment>
    </Router>
  );
};

export default App;
