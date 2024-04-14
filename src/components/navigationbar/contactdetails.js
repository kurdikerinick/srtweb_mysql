import React from 'react';
// import { FiPhone, FiMail } from 'react-icons/fi';
import '../../components/navigationbar/navbar.css';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
export default function ContactDetails() {
  return (
    <div>
      <div className="line" />
      <div className="contact-info">
        <div className="contact-item">
          <p>
          <PhoneIcon />  Contact: +11 1119 9999
          </p>
        </div>
        <div className="contact-item">
          <p>
          <EmailIcon /> Email Address: srtutorials@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
