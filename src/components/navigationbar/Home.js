import React from 'react';
import Navbar from './navbar';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Copyright from './copyright';

import '../../components/navigationbar/navbar.css';
import ContactDetails from './contactdetails';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      
      <section className="full-window home-one hero" id="home">
        <div className="hero-content">
          <h1 className="cursive-fancy">Welcome to SRTutorials</h1>
          <p className="student-writing">
            Unlock the Power of Personalized Learning at Your Doorstep!<br />
            Learning Made Easy: One-on-One at Home<br />
            Where education meets comfort, and personalized learning thrives.
          </p>
        </div>
      </section>
      <AboutUs />
      <ContactUs />
      <ContactDetails />
      <Copyright />
    </div>
  );
};

export default Home;
