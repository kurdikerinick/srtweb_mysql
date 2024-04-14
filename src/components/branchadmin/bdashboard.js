import React from 'react';
import { Link } from 'react-router-dom';
import '../../components/branchadmin/bdashboard.css';
import Branchnavbar from './branchnavbar';

export default function Bdashboard() {
  return (
    <div className="dashboard-container">
      <Branchnavbar />
      <div className='dashboard-content'>
        <ul className="dashboard-list">
          <li className="dashboard-item">
            <Link to="/enquiry" className="dashboard-link">
              <button className="dashboard-button">Enquiries</button>
            </Link>
          </li>
          <li className="dashboard-item dropdown">
            <button className="dashboard-button">Register</button>
            <div className="dropdown-content">
              <Link to="/sturegister" className="dashboard-link">
                <button className="dropdown-button">Student Registration</button>
              </Link>
              <Link to="/register" className="dashboard-link">
                <button className="dropdown-button">Tutor Registration</button>
              </Link>
            </div>
          </li>
          <li className="dashboard-item">
            <Link to="/assign" className="dashboard-link">
              <button className="dashboard-button">Assign Tutor</button>
            </Link>
          </li>
          <li className="dashboard-item">
            <Link to="/fees" className="dashboard-link">
              <button className="dashboard-button">Fees</button>
            </Link>
          </li>
          <li className="dashboard-item">
            <Link to="/report" className="dashboard-link">
              <button className="dashboard-button">Report</button>
            </Link>
          </li>
          <li className="dashboard-item">
            <Link to="/accounts" className="dashboard-link">
              <button className="dashboard-button">Accounts</button>
            </Link>
          </li>
          <li className="dashboard-item"></li>
        </ul>
      </div>
    </div>
  );
}
