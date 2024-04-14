import React, { useState, useEffect } from 'react';

const DisplayBranchadmin = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      async function fetchUsers() {
        try {
          const response = await fetch('http://127.0.0.1:5000/api/branchadmin', {
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
      <div>
        <h1>Branchadmins</h1>
        {error ? (
          <p>{error}</p>
        ) : (
          <ul>
            {users.map((branchadmin) => (
              <li key={branchadmin.id}>
                <li>Name: {branchadmin.name}</li>
                <li>Phone: {branchadmin.email}</li>  
                <li>Location: {branchadmin.dob}</li> 
                <li>Message: {branchadmin.address}</li> 
                <li>Location: {branchadmin.phone}</li> 
                <li>Location: {branchadmin.location}</li> 
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default DisplayBranchadmin;
