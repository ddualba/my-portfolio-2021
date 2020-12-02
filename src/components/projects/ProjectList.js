import React from 'react';

import ProjectItem from './ProjectItem';
import { myProjects } from './myProjects';

// bootstrap
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const ProjectList = () => {
  return (
    <Container className='text-center'>
      <div>
        <h1>My Projects</h1>
      </div>
      <Row>
        <CardDeck>
          {myProjects.map(proj => (
            <ProjectItem
              key={proj.id}
              stackType={proj.stackType}
              front={proj.front}
              back={proj.back}
              db={proj.db}
              addlPackages={proj.addlPackages}
              cssFWK={proj.cssFramework}
              deployedTo={proj.deployedTo}
              projectType={proj.projectType}
              name={proj.name}
              desc={proj.desc}
              customized={proj.customized}
              customizations={proj.customizations}
              appUrl={proj.appUrl}
              repoUrl={proj.repoUrl}
            />
          ))}
        </CardDeck>
      </Row>
    </Container>
  );
};

export default ProjectList;
