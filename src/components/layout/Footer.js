import React from 'react';
import Row from 'react-bootstrap/Row';

import { FaDraftingCompass } from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';

import './Footer.scss';

const Footer = () => {
  return (
    <Row>
      <footer>
        <div className='copyright'>
          <p>
            <FaDraftingCompass style={{ marginBottom: '2px' }} /> Dar Dualba
          </p>
        </div>
        <div className='social'>
          <a href='tel:949-307-4306' className='footer-phone'>
            <FaMobileAlt style={{ marginBottom: '2px' }} /> (949) 307-4306
          </a>
          <a href='mailto:ddualba@gmail.com' className='footer-linked'>
            <FaRegEnvelope style={{ marginBottom: '2px' }} /> ddualba@gmail.com
          </a>
        </div>
      </footer>
    </Row>
  );
};

export default Footer;
