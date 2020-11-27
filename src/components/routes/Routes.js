import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import CourseList from '../courses/CourseList';
import ProjectList from '../projects/ProjectList';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFound from '../layout/NotFound';

const Routes = () => {
  return (
    <Container style={{ paddingTop: '60px' }}>
      <Switch>
        <Route exact path='/projects' component={ProjectList} />
        <Route exact path='/education' component={CourseList} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />

        <Route component={NotFound} />
      </Switch>
    </Container>
  );
};

export default Routes;
