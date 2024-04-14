import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../student/studhome.css'
import StudentNavbar from './studentnavbar';

function MonitorTests() {
   const [testDetails, setTestDetails] = useState([]);
  const { studentId } = useParams();
  const [studentInfo, setStudentInfo] = useState([]);
  const [attendanceDays, setAttendanceDays] = useState([]);
  const [tutorInfo, setTutorInfo] = useState([]);

  useEffect(() => {
    
    const fetchData = async (studentId) => {
      try {
        console.log('Fetching tutor info...');
        const tutorInfoResponse = await fetch(`http://127.0.0.1:5000/api/assignments/fetch?studentId=${studentId}`);
    
        if (!tutorInfoResponse.ok) {
          console.error('Network response was not ok');
          throw new Error('Network response was not ok');
        }
    
        const tutorInfoData = await tutorInfoResponse.json();
        // console.log('tutorInfoData:', tutorInfoData);
        setTutorInfo(tutorInfoData);

console.log('Fetching Students data');
        const studentInfoResponse = await fetch(`http://127.0.0.1:5000/api/student/details?studentId=${studentId}`);
        if (!studentInfoResponse.ok) {
    console.error('Network response was not ok');
        }
         const studentInfoData = await studentInfoResponse.json();
         setStudentInfo(studentInfoData);

         console.log('Fetching test details...');
              const testResponse = await fetch(`http://127.0.0.1:5000/api/tests/display?studentId=${studentId}`);
              if (!testResponse.ok) {
                console.error('Network response was not ok');
               // throw new Error('Network response was not ok');
              }
              const testData = await testResponse.json();
             setTestDetails(testData);
     
             console.log('Fetching attendance days...');
                 const attendanceDaysResponse = await fetch(`http://127.0.0.1:5000/api/attendance/fetch?studentId=${studentId}`);
                  if (!attendanceDaysResponse.ok) {
                    console.error('Network response was not ok');
                    throw new Error('Network response was not ok');
                  }
                  const attendanceDaysData = await attendanceDaysResponse.json();
                  setAttendanceDays(attendanceDaysData);
             


      } catch (error) {
        console.error('Error fetching tutor info:', error.message);
      }
    };
    fetchData(studentId);
  }, [studentId]);

  
  return (
    <div>
    <StudentNavbar />
    <div className="stud-container">
           <div className="section">
        <h2>Course</h2>
       {/* <div className="p-container">
          <p>Monthly or Yearly (should display)</p>
          <p>Class Started Date:</p>
  </div>*/}
      </div>

{/* Student Section */}
<div className='section'>
  <div className='headerRow'>
    <div className='title'>Name:</div>
    <div className='title'>Class:</div>
    <div className='title'>Board:</div>
    <div className='title'>Address Proof:</div>
  </div>
  
  {studentInfo.length > 0 ? (
    <div className='studentRow'>
      <div className='studentData'>{studentInfo[0].stud_name || 'N/A'}</div>
 
      <div className='studentData'>{studentInfo[0].class || 'N/A'}</div>
      <div className='studentData'>{studentInfo[0].board || 'N/A'}</div>
      <div className='studentData'>{studentInfo[0].addressproof || 'N/A'}</div>
    </div>
  ) : (
    <div>No details found</div>
  )}
</div>

      {/* Tutor Section */}
      <div className="section">
       
        <div className='headerRow'>
        <div className='title'>Tutor Name :</div>
        <div className='title'>Education:</div>
        <div className='title'>Contact:</div>
        <div className='title'>Address:</div>
         
         </div>
         {tutorInfo.length > 0 ?(
          <div className='studentRow'>
            <div className='studentData'>{tutorInfo[0].tutor_name}</div>
            <div className='studentData'>{tutorInfo[0].education}</div>
            <div className='studentData'>{tutorInfo[0].contact}</div>
            <div className='studentData'>{tutorInfo[0].presentaddress}</div>
          
            </div>
            ):(
              <div>No details found</div>
         )}
      </div>

      {/* Tests Section */}
      <div className="section">
        <h2>Tests</h2>
        <div className="headerRow">
          <div className="title">Subject</div>
          <div className="title">Topic</div>
          <div className="title">Total</div>
          <div className="title">Obtained</div>
        </div>
        {testDetails.length > 0 ? (
          testDetails.map((test, index) => (
            <div key={index} className="studentRow">
              <div className="studentData">{test.subject_name}</div>
              <div className="studentData">{test.test_topic}</div>
              <div className="studentData">{test.marks}</div>
              <div className="studentData">{test.maximum_marks}</div>
              <div className="studentData">{test.obtained_marks}</div>
            </div>
          ))
        ) : (
          <div>No tests found</div>
        )}
      </div>

      {/* Classes Assigned and Taken Section */}
      <div className="section">
        <h2>Classes</h2>
        <div className="p-container">
        <p>Assigned: {attendanceDays.length > 0 ? attendanceDays[attendanceDays.length - 1].day : 'N/A'}</p>
 <p>Taken:</p>
        
      </div>
            </div>

    </div>
    </div>
  );
}

export default MonitorTests;
