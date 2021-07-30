import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { FaRocket } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaCodeBranch } from 'react-icons/fa';

const ProjectItem = ({
  stackType,
  projectType,
  name,
  desc,
  customized,
  customizations,
  appUrl,
  repoUrl,
  front,
  back,
  db,
  addlPackages,
  cssFWK,
  deployedTo
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Col xs={12} md={6}>
      <Card className='text-center m-2'>
        <Card.Body className='pt-0 pl-0 pr-0'>
          <Card.Header>{stackType}</Card.Header>
          <Card.Title className='mt-2'>{name}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            Project Type: {projectType}{' '}
          </Card.Subtitle>
          <Button
            onClick={handleShow}
            variant='outline-info'
            size='sm'
            className='p-1 mb-2'
          >
            Stack Details
          </Button>

          <Modal
            aria-labelledby='contained-modal-title-vcenter'
            centered
            show={show}
            onHide={handleClose}
          >
            <Modal.Header closeButton>
              <Modal.Title>Stack Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ul style={{ listStyleType: 'none' }}>
                <li>
                  <strong>FrontEnd:</strong> {front}
                </li>
                <li>
                  <strong>BackEnd:</strong> {back}
                </li>
                <li>
                  <strong>Database:</strong> {db}
                </li>
                <li>
                  <strong>CSS Framework:</strong> {cssFWK}
                </li>
                <li>
                  <strong>Notable Packages:</strong> {addlPackages}
                </li>
              </ul>
              <p className='text-center'>Deployed To: {deployedTo}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <Card.Text className='pl-2 pr-2'>{desc}</Card.Text>

          {customized && (
            <Card.Text className='pl-2 pr-2'>
              <FaCodeBranch style={{ color: 'green' }} size='1.5em' />{' '}
              {customizations}
            </Card.Text>
          )}

          {/* Link to app & repo */}
          {appUrl !== '' && (
            <Card.Link
              href={appUrl}
              target='_blank'
              className='btn btn-primary'
            >
              <span className='icon-span'>
                <FaRocket /> Launch App
              </span>
            </Card.Link>
          )}

          <Card.Link
            href={repoUrl}
            target='_blank'
            className='btn btn-secondary'
          >
            <span className='icon-span'>
              <FaGithub /> Repository
            </span>
          </Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProjectItem;
