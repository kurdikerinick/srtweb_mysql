import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './components/navigationbar/AboutUs';
import ContactUs from './components/navigationbar/ContactUs';
import SuperAdmin from './components/superadmin/superadmin';
import Home from './components/navigationbar/Home';
import Dashboard from './components/superadmin/dashboard';
import BranchAdminRegistration from './components/superadmin/bar';
import BranchAdmin from './components/branchadmin/branchadmin';
import Bdashboard from './components/branchadmin/bdashboard';
import Student from './components/student/student';
import StudentRegistration from './components/branchadmin/sregistration';
import Enquiry from './components/branchadmin/enquiry';
import TutorRegistration from './components/branchadmin/tregistration';
import DisplayBranchadmin from './components/superadmin/displayadmin';
import Assign from './components/branchadmin/assign';
// import Admit from './components/branchadmin/studadmit';
import TutorLogin from './components/tutor/tutor';
import Accounts from './components/branchadmin/accounts';
import ContactDetails from './components/navigationbar/contactdetails';
import MonitorTests from './components/student/homepage';
import StudentNavbar from './components/student/studentnavbar';
import TutorHomeWeb from './components/tutor/tutorhome';
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/superadmin" element={<SuperAdmin />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/barreg" element={<BranchAdminRegistration />} />
          <Route path='/branchadmin' element={<BranchAdmin />} />
          <Route path='/bdashboard' element={<Bdashboard />} />
          <Route path='/student' element={<Student />} />
          <Route path='/assign' element={< Assign />} />
          <Route path='/tlogin' element={<TutorLogin/>} />
          <Route path='/enquiry' element={<Enquiry />} />
          <Route path='/register' element={<TutorRegistration />} />
          <Route path='/sturegister' element={<StudentRegistration />} />
          <Route path='/displaybranchadmin'element={< DisplayBranchadmin />} />
           {/* <Route path='/admit' element={<Admit />} /> */}
           <Route path='/accounts' element={<Accounts />} />
           <Route path='/contactdetails' element={<ContactDetails />} />
           <Route path="/studhomepage/:studentId" element={<MonitorTests />} />
           <Route path='/StudentNavbar' element={<StudentNavbar />} />
           <Route path='/TutorHomeWeb/:TutorID' element={<TutorHomeWeb />} />
         
        </Routes>
    
      </div>
    </Router>
  );
}

export default App;
