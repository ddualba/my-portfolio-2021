import React from 'react';
import Row from 'react-bootstrap/Row';

import './Footer.css';

const Footer = () => {
  return (
    <Row>
      <footer>
        <div className='copyright'>
          <p>
            <i className='fas fa-drafting-compass'></i> Dar Dualba
          </p>
        </div>
        <div className='social'>
          <a href='tel:949-307-4306' className='footer-phone'>
            <i className='fas fa-mobile-alt'></i> (949) 307-4306
          </a>
          <a href='mailto:ddualba@gmail.com' className='footer-linked'>
            <i className='fas fa-envelope-square'></i> ddualba@gmail.com
          </a>
        </div>
      </footer>
    </Row>
  );
};

export default Footer;
