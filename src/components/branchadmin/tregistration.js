// src/components/TutorRegistration.js
import React, { useState } from 'react';
import '../style.css';

const TutorRegistration = () => {
  
  const [formData, setFormData] = useState({
    tutor_name: '',
    email: '',
    dob: '',
    password: '',
    confirmPassword:'',
    education: '',
    contact: '',
    presentaddress: '', 
    gender:"",
    paddress: '',
    subject: '',
    vehicle: '',
    ccategory: '',
    addressproof: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    const data = new FormData();
    for (const key in formData) {
      if (key === 'addressproof') {
        data.append(key, formData[key]);
      } else {
        data.append(key, formData[key]);
      }
    }

    try {
      const response = await fetch('http://127.0.0.1:5000/api/tutor/register', {
        method: 'POST',
        body: data,
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

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  return (
    <div className="registration-container">
      <h1>Tutor Registration</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Name"
            name="tutor_name"
            value={formData.tutor_name}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div>
          <select style={style.select}
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            type="date"
            placeholder="Date of Birth"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
        <input
  type="password"
  placeholder="Confirm Password"
  name="confirmPassword"  // Make sure this matches the name attribute
  value={formData.confirmPassword}  // Use formData.confirmPassword
  onChange={handleInputChange}
  required
/>

        </div>
        <div>
          <input
            type="text"
            placeholder="Education"
            name="education"
            value={formData.education}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Contact"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
        <div>
  <input
    type="text"
    placeholder="Present Address"
    name="presentaddress"
    value={formData.presentaddress}
    onChange={handleInputChange}
    required
  />
</div>

        </div>
        <div>
          <input
            type="text"
            placeholder="Permanent Address"
            name="paddress"
            value={formData.paddress}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <select
            style={style.select}
            placeholder="Classes interested to teach"
            name="ccategory"
            value={formData.ccategory}
            onChange={handleInputChange}
            required
          >
            <option value="">Classes interested to teach</option>
            <option value="primary">Primary School</option>
            <option value="highschool">High School</option>
            <option value="college">College</option>
          </select>
        </div>
        <div>
          <select
            style={style.select}
            name="vehicle"
            value={formData.vehicle}
            onChange={handleInputChange}
            required
          >
            <option value="">Have your own vehicle?</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
        <input
  type="file"
  accept=".jpg, .png, .jpeg, .pdf"
  name="addressproof"
  onChange={handleInputChange}
  
/>
        </div>
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
};

const style = {
  select: {
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
};

export default TutorRegistration;
