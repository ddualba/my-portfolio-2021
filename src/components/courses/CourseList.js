import React from 'react';
import CourseItem from './CourseItem';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { camps } from './myCourses';

const CourseList = () => {
  return (
    <Container>
      <div>
        <h1>Education</h1>
      </div>
      <Row>
        <CardDeck>
          {camps.map(camp => (
            // <Col xs={12} md={6}>
            <CourseItem
              key={camp.id}
              name={camp.name}
              instructor={camp.instructor}
              courseUrl={camp.courseUrl}
              desc={camp.desc}
              completed={camp.completed}
              compDate={camp.compDate}
              thumbnail={camp.courseThumbnail}
            />
            // </Col>
          ))}
        </CardDeck>
      </Row>
    </Container>
  );
};

export default CourseList;
