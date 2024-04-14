import React from 'react';
import { Link } from 'react-router-dom';
import '../../components/navigationbar/navbar.css';
import logoImage from '../../images/logo.jpeg';
import { Link as ScrollLink } from 'react-scroll';


const Navbar = () => {
  return (
    <nav className="sticky-navbar">
      <ul>
      <li><Link to="/"><img src={logoImage} alt="Logo" className="logo" /></Link></li>
        <li><ScrollLink to="home" smooth={true} duration={200} style={{ cursor: 'pointer' }}>Home</ScrollLink></li>
        <li><ScrollLink to="contact" smooth={true} duration={200} style={{ cursor: 'pointer' }}>Contact Us</ScrollLink></li>
        <li><ScrollLink to="about" smooth={true} duration={200} style={{ cursor: 'pointer' }}>About Us</ScrollLink></li>
           <li className="dropdown">
          <span>Login</span>
          <div className="dropdown-content">
            <Link to="/student">Student/Parent</Link>
            <Link to="/tlogin">Tutor</Link>
            <Link to="/superadmin">Super Admin</Link>
            <Link to="/branchadmin">Branch Admin</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
