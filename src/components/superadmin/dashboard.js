import React from 'react'
//import BranchAdminRegistration from './bar'
import { Link } from "react-router-dom";


function Dashboard() {
  return (
    <div>
      <h1>This is super admin page</h1>
      <ul>
        <li>
        <Link to="/barreg">Branch Admin Register</Link>
        </li>
        <li>
        <Link to="/displaybranchadmin">Registered admins</Link>
        </li>
      </ul>
      
    </div>
  )
}

export default Dashboard
