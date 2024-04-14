// src/components/BranchAdminRegistration.js
import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, TextareaAutosize, Box } from '@mui/material';

//import { useNavigate } from 'react-router-dom';
// import '../../components/navigationbar/styles.css'

const ContactUs = () => {
  //const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation]= useState('');
const [message, setMessage]= useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/api/user/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, location, message }),
      });

      if (response.ok) {
        alert('Your Message been received successfully');
        // navigate('/submit'); // Redirect to login page
      } else {
        console.log('Failed to send message');
      }
    } catch (error) {
      console.error('Error during message submission', error);
    }
  };

  return (
    <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#4786d2',
      padding: '0 20px', // Background color for the entire page
    }}
  >
     <Box
        sx={{
          maxWidth: 400,
          width: '100%',
          padding: 3,
          backgroundColor: 'rgba(255, 255, 255)',
          borderRadius: 4,
        }}
      >
          <form onSubmit={handleSubmit}>
        <h2>Contact Us</h2>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Contact"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel id="location-label">Select a Location</InputLabel>
          <Select
            labelId="location-label"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            label="Select a Location"
          >
            <MenuItem value="">Select a Location</MenuItem>
            <MenuItem value="branch1">Branch 1</MenuItem>
            <MenuItem value="branch2">Branch 2</MenuItem>
            <MenuItem value="branch3">Branch 3</MenuItem>
          </Select>
        </FormControl>
        <TextareaAutosize
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          minRows={3}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <Button type="submit" variant="contained" fullWidth>
          Register
        </Button>
      </form>
    </Box>
    </Box>
  );
};

export default ContactUs;