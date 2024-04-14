import React, { useState, useEffect } from 'react';
import '../../components/branchadmin/branchadmin.css'
import SendEmailButton from './SendEmailButton'; // Import the SendEmailButton component



function Accounts() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch student data from the backend
    fetch('http://127.0.0.1:5000/api/students')
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
      });
  }, []);

  return (
    <div className="accounts">
      <h1>Student List</h1>
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Board</th>
            <th>Class</th>
            <th>Send mail confirmation</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.student_id}>
              <td>{student.stud_name}</td>
              <td>{student.email}</td>
              <td>{student.password}</td>
              <td>{student.board}</td>
              <td>{student.class}</td>
              <td><SendEmailButton student={student} /></td>
              <td>Status</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Accounts;
