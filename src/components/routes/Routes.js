import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import CourseList from '../courses/CourseList';
import ProjectList from '../projects/ProjectList';
import NotFound from '../layout/NotFound';

const Routes = () => {
  return (
    <Container style={{ paddingTop: '1rem' }}>
      <Switch>
        <Route exact path='/projects' component={ProjectList} />
        <Route exact path='/education' component={CourseList} />
        <Route component={NotFound} />
      </Switch>
    </Container>
  );
};

export default Routes;
