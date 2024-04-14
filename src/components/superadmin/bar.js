// src/components/BranchAdminRegistration.js
import React, { useState } from 'react';
import '../style.css'

const BranchAdminRegistration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [location, setLocation]= useState('');
  const [address, setAddress]= useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:5000/api/branchadmin/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, dob, password , address, location}),
      });

      if (response.ok) {
        alert('Registration successful');
        window.location.reload();
      } else {
        console.log('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="registration-container">
      <h1>Branch Admin Registration</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder='Name'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            placeholder='Email'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
        placeholder='Address'
        type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <div>
          <input
          placeholder='Phone'
          type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <input
          placeholder='Date of Birth'
          type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>
        <div>
          <input
           placeholder='Password'
          type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <input
          placeholder='Confirm Password'
          type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
<div>
  <select  style={style.select}
  placeholder='Location'
  id='location'
  value={location}
  onChange={(e) => setLocation(e.target.value)}
  required >
 <option value="">Select a Location</option>
            <option value="branch1">Branch 1</option>
            <option value="branch2">Branch 2</option>
            <option value="branch3">Branch 3</option>
       
  </select>

  </div>        
        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
};

export default BranchAdminRegistration;

const style = {
  select: {
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  }
};
