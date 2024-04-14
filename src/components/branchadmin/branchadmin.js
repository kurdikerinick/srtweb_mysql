import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../style.css';

const BranchAdmin = () => {
  const navigate = useNavigate(); // Initialize navigate

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setBranch] = useState(''); // Add branch state


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
        const response = await fetch('http://127.0.0.1:5000/api/branchadmin/blogin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password ,location }),
          });
          
      if (response.ok) {
        // Successful login
        alert('Login successful');
        navigate('/bdashboard');
      } else if (response.status === 401) {
        // Invalid credentials
        alert('Invalid credentials');
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  
  return (
    <div style={styles.container}>
      <div style={styles.boxContainer}>
      <h1 style={styles.heading}>Branch Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <div style={styles.inputContainer}>
             <input
             placeholder='Email'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputContainer}>
             <input
          placeholder='Password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputContainer}>
          
          <select
          placeholder='Branch'
            value={location}
            onChange={(e) => setBranch(e.target.value)}
            style={styles.input}
            required
          >
            <option value="">Select Branch</option>
            <option value="Branch1">Branch1</option>
            <option value="Branch2">Branch2</option>
            <option value="Branch3">Branch3</option>
          </select>
        </div>
        
        <button type="submit" style={styles.button}>Login</button>
      </form>
      </div>
    </div>
  
  );

  
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', // Center vertically and horizontally
    height: '100vh', // Full viewport height
    backgroundColor: '#0056b3',
  },
  boxContainer: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  inputContainer: {
    marginBottom: '15px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    marginBottom: '5px',
    fontSize: '16px',
  },
  input: {
    padding: '10px',
    width: '100%',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};
export default BranchAdmin;
