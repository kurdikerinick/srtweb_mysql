import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../components/navigationbar/navbar.css';

import {  faFileAlt } from '@fortawesome/free-solid-svg-icons';

const Copyright = () => {
  return (
    <div className="copyright-container">
      <div className="copyright-notice">
        <FontAwesomeIcon icon={faFileAlt} className="icon" />
        <span className='copy'>&nbsp;Copyright © 2023 SRTutorials. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Copyright;

