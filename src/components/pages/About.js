import React from 'react';
import Story from '../story/Story';

import './About.scss';

const About = () => {
  return (
    <div className='section-about'>
      <div className='bg-video'>
        <video className='bg-video__content' autoPlay muted loop playsInline>
          <source
            src={`${process.env.PUBLIC_URL}/assets/images/white-waves.mp4`}
            type='video/mp4'
          />
          <source
            src={`${process.env.PUBLIC_URL}/assets/images/white-waves.webm`}
            type='video/webm'
          />
          Your browser is not supported!
        </video>
      </div>
      <Story />
    </div>
  );
};

export default About;
