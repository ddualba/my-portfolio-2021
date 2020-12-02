import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const navbar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      bg='dark'
      variant='dark'
      sticky='top'
      className='pl-1'
    >
      <Navbar.Brand>
        <Nav.Link eventKey={1} as={Link} to='/' style={{ color: 'inherit' }}>
          <i className='fab fa-react'></i> Dar's Portfolio
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav' className='text-center'>
        <Nav className='mr-auto'>
          <Nav.Link eventKey={2} as={Link} to='/'>
            Home
          </Nav.Link>
          <Nav.Link eventKey={3} as={Link} to='/projects'>
            Projects
          </Nav.Link>
          <Nav.Link eventKey={4} as={Link} to='/education'>
            Education
          </Nav.Link>
          <Nav.Link eventKey={5} as={Link} to='/about'>
            About
          </Nav.Link>
          <Nav.Link eventKey={6} as={Link} to='/contact'>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default navbar;
