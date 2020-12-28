import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
import desktopImage from './material-dark-blue-full.jpg';
import mobileImage from './material-dark-blue-mobile.jpg';

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl = windowWidth >= 650 ? desktopImage : mobileImage;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className='Landing' style={{ backgroundImage: `url(${imageUrl})` }}>
      {/* <Container className='Landing-content'>
        <Row>
          <Col> */}
      <div className='text-box'>
        <h1 className='heading-primary'>
          <span className='heading-primary-main'>My Developer Story</span>
          <span className='heading-primary-sub'>
            CPA turned MERN Javascript developer
          </span>
        </h1>
        <p>
          I'm pursuing my passion for building data driven solutions but now
          focused on doing so with with javascript, react and the other
          components of the MERN stack.
        </p>
        <div className='btn-box'>
          <Link to='/projects' className='btn btn-white btn-animated'>
            <span style={{ fontSize: '1.25rem', color: '#0F3B68' }}>
              <i className='fas fa-project-diagram'></i>
            </span>{' '}
            Recent Projects
          </Link>
          <Link to='/education' className='btn btn-white btn-animated'>
            <span style={{ fontSize: '1.25rem', color: '#0F3B68' }}>
              <i className='fas fa-user-astronaut'></i>
            </span>{' '}
            Recent Training
          </Link>
        </div>
      </div>
      {/* </Col>
        </Row>
      </Container> */}
    </div>
  );
};

export default Home;
