import React from 'react'
import logoImage from '../../images/logo.jpeg';
import '../../components/navigationbar/navbar.css'
import { Link } from 'react-router-dom';


export default function StudentNavbar() {
  return (
    
      <nav className="sticky-navbar">
      <ul>
      <li><Link to="/"><img src={logoImage} alt="Logo" className="logo" /></Link></li>
      <li><Link to="/">Logout</Link></li> 

      </ul>
    </nav>
   
  )
}
