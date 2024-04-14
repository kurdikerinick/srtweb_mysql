import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentRegistration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    stud_name: '',
    email: '',
    dob: '',
    password: '',
    confirmPassword: '',
    board: '',
    contact: '',
    presentaddress: '',
    primelocation: '',
    branch: '',
    class: '',
    fees:'',
    days:'',
    subject:'',
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
      const response = await fetch('http://127.0.0.1:5000/api/student/sturegister', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        const responseData = await response.json();
        
        alert('Registration successful');
        navigate('/sturegister');

      } else {
        console.log('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    const inputValue = type === 'file' ? files[0] : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };
  return (
    <div className="registration-container">
      <h1>Student Registration</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Name"
            name="stud_name"
            value={formData.stud_name}
            onChange={handleInputChange}
            required
          />
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
           name="confirmPassword"  
           value={formData.confirmPassword}  
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
          <select
            style={style.select}
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
            type="text"
            placeholder="Present Address"
            name="presentaddress"
            value={formData.presentaddress}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Prime Location"
            name="primelocation"
            value={formData.primelocation}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Class"
            name="class"
            value={formData.class}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <select
            style={style.select}
            name="board"
            value={formData.board}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Board</option>
            <option value="state board">State Boards</option>
            <option value="cbsc">Central Board of Secondary Education (CBSE)</option>
            <option value="icse">Indian Certificate of Secondary Education (ICSE)</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="Subjects"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Fees"
            name="fees"
            value={formData.fees}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Days"
            name="days"
            value={formData.days}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <select
            style={style.select}
            name="branch"
            value={formData.branch}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Branch</option>
            <option value=" Branch1">Branch1</option>
            <option value="Branch2">Branch2</option>
            <option value="Branch3">Branch3</option>
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
        <button type="submit" className="register-button">Register</button>
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

export default StudentRegistration;
