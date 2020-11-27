import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const navbar = () => {
  return (
    <Fragment>
      <Navbar bg='dark' variant='dark' fixed='top'>
        <Navbar.Brand as={Link} to='/'>
          Dar's Portfolio
        </Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link as={Link} to='/'>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to='/projects'>
            Projects
          </Nav.Link>
          <Nav.Link as={Link} to='/education'>
            Education
          </Nav.Link>
          <Nav.Link as={Link} to='/about'>
            About
          </Nav.Link>
          <Nav.Link as={Link} to='/contact'>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar>
    </Fragment>
  );
};

export default navbar;
