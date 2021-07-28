import React from 'react';

import './Story.scss';

const Story = () => {
  return (
    <div className='story'>
      <figure className='story__shape'>
        <img
          src='https://i.ibb.co/C1Gnjfw/headshot-2020.jpg'
          alt='headshot'
          className='story__img'
        />
        {/* <img
          src={`${process.env.PUBLIC_URL}/assets/images/headshot-2020.jpg`}
          alt='headshot'
          className='story__img'
        /> */}
        <figcaption className='story__caption'>Dar Dualba</figcaption>
      </figure>
      <div className='story__text'>
        <h3 className='story__heading'>More about me</h3>
        <p>
          My name is Dar. I like learning new things and being challenged. I
          have 15+ years of software implementation, training, and consulting
          with financial applications. Initially I used my Microsoft Systems
          Engineer certification to help me upgrade databases and client/server
          applications in the datacenters of large corporations. Later, I spent
          several years expanding on my Excel expertise by learning visual basic
          for applications and developing solutions with that platform.
        </p>
        <p>
          My foundation with visual basic has helped me to transition to
          javascript. My current challenge has been to learn react and all the
          pieces of the MERN fullstack to be able to develop data driven web
          applications. This site has a collection of the courses and projects I
          have completed in my endeavor. I am looking forward to joining a team
          to work collaboratively in building new web applications as well has
          helping to learn and learning from my team.
        </p>
        <p>
          When I am not busy working or studying I enjoy outside fitness
          activies like surfing, mountain biking and jogging as well as spending
          time with my family in more relaxing activities.
        </p>
      </div>
    </div>
  );
};

export default Story;
