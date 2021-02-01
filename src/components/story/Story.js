import React from 'react';

import './Story.scss';

const Story = () => {
  return (
    <div className='story'>
      <figure className='story__shape'>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/headshot-2020.jpg`}
          alt=''
          className='story__img'
        />
        <figcaption className='story__caption'>Dar Dualba</figcaption>
      </figure>
      <div className='story__text'>
        <h3 className='story__heading'>More about me</h3>
        <p>
          My name is Dar. I like learning new things and being challenged. I
          have 15+ years of software implementation, training, and consulting
          with financial applications. Initially I used my Microsoft Systems
          Engineer certification to help me upgrade databases and client/server
          applications in the datacenters of large corporations. I spent several
          years expanded on my Excel expertise learning visual basic for
          applications and developing solutions with that platform.
        </p>
        <p>
          My foundation with visual basic has helped transition to working with
          javascript. But my recent challenge has been to expand on javascript
          by learning react and all the pieces of the MERN fullstack to be able
          to develop data driven web applications. This site has a collection of
          the courses and projects I have completed in my endeavor. I am looking
          forward to joining a team to work collaboratively in building new web
          applications and well has helping to learn and learning from my team.
        </p>
        <p>
          When I am not busy working or studying I enjoy outside fitness
          activies like surfing, mountain biking and jogging. Also like to spend
          time with my family in more relaxing activies like hiking and
          paddleboarding.{' '}
        </p>
      </div>
    </div>
  );
};

export default Story;
