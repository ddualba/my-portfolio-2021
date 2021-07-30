import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAstronaut } from 'react-icons/fa';
import { FaProjectDiagram } from 'react-icons/fa';

import './Home.scss';
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
    <main>
      <div className='Landing' style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className='text-box'>
          <h1 className='heading-primary'>
            <span className='heading-primary-main'>My Developer Story</span>
            <span className='heading-primary-sub'>
              CPA turned MERN Javascript developer
            </span>
          </h1>
          <p>
            I'm pursuing my passion for building data driven solutions but now
            focused on doing so with javascript, react, material-ui and the
            other components of the MERN stack.
          </p>
          <div className='btn-box'>
            <Link to='/projects' className='btn btn-white btn-animated'>
              <span className='icon-span'>
                <FaProjectDiagram style={{ color: '#0F3B68' }} size='1.25em' />
                Recent Projects
              </span>
            </Link>
            <Link to='/education' className='btn btn-white btn-animated'>
              <span className='icon-span'>
                <FaUserAstronaut style={{ color: '#0F3B68' }} size='1.25em' />
                Recent Training
              </span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
