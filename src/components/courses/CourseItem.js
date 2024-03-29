import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const CourseItem = ({
  name,
  instructor,
  courseUrl,
  thumbnail,
  desc,
  completed,
  compDate
}) => {
  return (
    <Col xs={12} md={6}>
      <Card className='text-center m-2'>
        <Card.Img
          variant='top'
          src={`${process.env.PUBLIC_URL}/assets/images/${thumbnail}`}
        />
        <Card.Body className='mt-2 p-0'>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            Instructor: {instructor}
          </Card.Subtitle>

          <Card.Text className='p-2'>{desc}</Card.Text>

          {/* Link to course details */}
          <Card.Link href={courseUrl} target='_blank'>
            Course Details
          </Card.Link>

          <Card.Footer className='mt-3'>
            {/* If !completed, show in progress, else show completion date */}
            {!completed ? (
              <small className='text-muted'>
                <em>Completion: In Progress</em>
              </small>
            ) : (
              <small className='text-muted'>Completed: {compDate}</small>
            )}
          </Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CourseItem;
