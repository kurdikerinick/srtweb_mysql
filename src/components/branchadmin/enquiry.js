import React, { useState, useEffect } from 'react';

const Enquiry = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      async function fetchUsers() {
        try {
          const response = await fetch('http://127.0.0.1:5000/api/user', {
            method: 'GET', // Explicitly specify the HTTP method
          });

          console.log('Response status:', response.status); // Check response status
          if (!response.ok) {
            console.error('Response not ok');
            throw new Error('Error fetching users');
          }
          const data = await response.json();
          console.log('Data:', data); // Check the data received
          setUsers(data);
        } catch (error) {
          console.error('Error fetching users:', error);
          setError('An error occurred while fetching user data.');
        }
      }
      
      fetchUsers();
    }, []);
  
    return (
      <div className="enquiry-container">
        <h1>Enquiries</h1>
        {error ? (
          <p>{error}</p>
        ) : (
          <ul className="user-table1">
            {users.map((user) => (
              <li key={user.id} className="user-item">
                <li>Name: {user.name}</li>
                <li>Phone: {user.phone}</li>  
                <li>Location: {user.location}</li> 
                <li>Message: {user.message}</li> 
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default Enquiry;
